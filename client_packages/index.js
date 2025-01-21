require('./player/login');
require('./player/chat');
require('./player/info');
require('./vspawner');
require('./createTerritory');

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});

mp.events.add("playerDeath", (player, reason, killer) => {
    const deathName = player.name;
    const killerName = killer.name;
    if(reason == 341774354) {
        mp.players.broadcast(`${deathName} morreu em um helicóptero!`);
        return;
    }
    mp.players.broadcast(`${killerName} matou ${deathName}. Razão: ${reason}`);
 });