/*const commands = {
    '/gang': 'Comandos da gang: /gang criar | entrar | sair | kickar | level | info | membros',
    '/gang criar': 'Digite: /gang criar [nome da gang]',
    '/gang entrar': '',
    '/gang sair': '',
    '/gang kickar': 'Digite: /gang kickar [id do player]',
    '/gang level': 'Digite: /gang level [id do player]',
    '/gang lider': 'Digite: /gang lider [id do player]',
    '/gang info': '',
    '/gang membros': '',
    '/pm': 'Digite: /pm [id do player] [mensagem]'
};*/

if(mp.storage.data.timeStamp === undefined)
    mp.storage.data.timeStamp = false;
if(mp.storage.data.pageSize === undefined)
    mp.storage.data.pageSize = 18;
if(mp.storage.data.fontSize === undefined)
    mp.storage.data.fontSize = 0.9;
if(mp.storage.data.toggleChat === undefined)
    mp.storage.data.toggleChat = true;

mp.gui.chat.show(false);

const chat = mp.browsers.new('package://cef/advanced-chat/index.html');

chat.markAsChat();

// Set Data
chat.execute(`setToggleTimestamp(${mp.storage.data.timeStamp});`);
chat.execute(`setPageSize(${mp.storage.data.pageSize});`);
chat.execute(`setFontSize(${mp.storage.data.fontSize});`);
chat.execute(`setToggleChat(${mp.storage.data.toggleChat});`);

// Add commands
mp.events.add("client:timestamp", () => {
    let timeStamp = !mp.storage.data.timeStamp;
    chat.execute(`setToggleTimestamp(${timeStamp});`);
    mp.storage.data.timeStamp = timeStamp;
});

mp.events.add("client:fontsize", (fontSize) => {
    if(fontSize< 0.5 || fontSize > 1.5) {
        mp.gui.chat.push("/fontsize accepts values between 0.5 and 1.5 (Default: 0.9)");
        return;
    }
    mp.storage.data.fontSize = fontSize;
    chat.execute(`setFontSize(${fontSize});`);
});

mp.events.add("client:pagesize", (pageSize) => {
    if(pageSize < 4 || pageSize > 24) {
        mp.gui.chat.push("/pagesize accepts values between 4 and 24 (Default: 18)");
        return;
    }
    mp.storage.data.pageSize = pageSize;
    chat.execute(`setPageSize(${pageSize});`);
});

mp.events.add("client:togglechat", () => {
    mp.storage.data.toggleChat = !mp.storage.data.toggleChat;
    chat.execute(`setToggleChat(${mp.storage.data.toggleChat});`);
});

mp.events.add("client:chathelp", () => {
    mp.gui.chat.push("!{#FFA500}/timestamp /fontsize /pagesize /togglechat");
});

mp.events.add("client:commandGang", () => {
    mp.gui.chat.push("!{#FFA500}/gang [entrar | sair | criar | convidar | membros | info | kickar]");
});

// Anti spam
mp.players.local.lastMessage = new Date().getTime();
mp.events.add("setLastMessage", (ms) => {
    mp.players.local.lastMessage = ms + 350;
});

// Clear chat event, call from server
mp.events.add("server:clearChat", () => {
    chat.execute(`chatAPI.clear();`);
});

mp.events.add("client:playerchat", (playerName, playerColor, message) => {
    // Definindo a cor do jogador e o nome do jogador
    const coloredName = `!{#${playerColor}}${playerName}`; // Aplica a cor ao nome

    // Exibe o nome colorido seguido pela mensagem
    const formattedMessage = `${coloredName}!{#FFFFFF}: ${message}`;

    // Exibe a mensagem formatada no chat
    mp.gui.chat.push(formattedMessage);
});


