let browserInfoPlayer;
let browserLifeBar;

mp.events.add('client:infoPlayer', (dataPlayer) => {
  mp.console.logInfo(JSON.stringify(dataPlayer));
  const {
    playerName,
    levelPlayer,
    expPlayer,
    gangInfo,
    position
  } = dataPlayer;

  const { x, y, z } = JSON.parse(position);

  mp.players.local.setCoords(x, y, z, false, false, false, false);

  if (!browserInfoPlayer)
    browserInfoPlayer = mp.browsers.new('package://cef/info-player/index.html');

  if (!browserLifeBar) 
    browserLifeBar = mp.browsers.new("package://cef/life-bar/index.html");

  browserInfoPlayer.execute(`setInfoPlayer(
    "${playerName}",
    "${levelPlayer}",
    "${(expPlayer/(levelPlayer*10))*100}",
    "${gangInfo.gangId}",
    "${gangInfo.gangName}",
    "${gangInfo.levelGang}",
    "${(gangInfo.expGang/(gangInfo.levelGang*10))*100}"
  )`);

  let player = mp.players.local; 

  browserLifeBar.execute('setLifeArmorBar("' + player.getHealth() + '", "' + player.getArmour() + '")');
  
  //if u don't wanna use the gps off just delete this condition.
  /*if (mp.players.local.vehicle) { //Check if the player is in car or not.
      mp.game.ui.displayRadar(true);
      // mp.game.graphics.notify('Gps ~g~Enabled');
  }
  else {
      mp.game.ui.displayRadar(false);
  }*/
});
  
