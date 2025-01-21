function setInfoPlayer (
    playerName,
    levelPlayer,
    playerExpPercentage,
    gangId,
    gangName,
    levelGang,
    gangExpPercentage
) {
    $("#playerName").text(playerName);
    $("#levelPlayer").text('Level: ' + levelPlayer);
    $("#boxExpPlayer").css("width", (`${playerExpPercentage}`)+"%");

    if (gangId == 1)
        $("#infoGang").hide();

    else if (gangId > 1) {
        $("#gangName").text(gangName);
        $("#levelGang").text('Level: ' + levelGang);
        $("#boxExpGang").css("width", (`${gangExpPercentage}`)+"%");
    }
};