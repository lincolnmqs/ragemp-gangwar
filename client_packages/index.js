require('./player/login.js');
require('./player/logout.js');

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});