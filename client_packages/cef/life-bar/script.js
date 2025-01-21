function setLifeArmorBar(heal, armor){
  let $heal = $("#heal");
  let $armor = $("#armor");
  let $box = $("#box");
  let $boxArmor = $("#boxArmor");
  
  $box.css("width", (`${heal}`)+"%"); //Hp of the player.

  if (armor >= 0.10) {
    $boxArmor.css("width", (`${armor}`)+"%"); //Armor of the player.
    $armor.show();
  }

  else if (armor < 0.10)
    $armor.hide();
};