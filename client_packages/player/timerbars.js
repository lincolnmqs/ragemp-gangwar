require("../timerbars/index.js");

// lets create some progress bars
let timeBar = new TimerBar("TIME LEFT");
timeBar.text = "33:27";

let teamBar = new TimerBar("TEAM MEMBERS LEFT");
teamBar.text = "4";

let healthBar = new TimerBar("BOSS HEALTH", true);
healthBar.progress = 0.8;
healthBar.pbarFgColor = [224, 50, 50, 255];
healthBar.pbarBgColor = [112, 25, 25, 255];

let rewardBar = new TimerBar("REWARD");
rewardBar.text = "$500000";
rewardBar.textColor = [114, 204, 114, 255];

// f7 to toggle visibility of bars
mp.keys.bind(0x76, false, () => {
    timeBar.visible = !timeBar.visible;
    teamBar.visible = !teamBar.visible;
    healthBar.visible = !healthBar.visible;
    rewardBar.visible = !rewardBar.visible;
});

// f8 will change health bar's value to something random
mp.keys.bind(0x77, false, () => {
    healthBar.progress = Math.random();
});