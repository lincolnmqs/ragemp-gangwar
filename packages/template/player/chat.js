// Add commands
mp.events.addCommand("timestamp", (player) => {
    player.call("client:timestamp");
});

mp.events.addCommand("fontsize", (player, _, fontSize) => {
    player.call("client:fontsize", [fontSize]);
});

mp.events.addCommand("pagesize", (player, _, pageSize) => {
    player.call("client:pagesize", [pageSize]);
});

mp.events.addCommand("togglechat", (player) => {
    player.call("client:togglechat");
});

mp.events.addCommand("chathelp", (player) => {
    player.call("client:chathelp");
});

mp.events.addCommand("gang", (player) => {
    player.call("client:commandGang");
});

// Add events
mp.events.add("playerChat", (player, message) => {
    // Enviar apenas o nome do jogador e a mensagem como argumentos
    player.call("client:playerchat", [player.name, player[player.name].color, message]);
});