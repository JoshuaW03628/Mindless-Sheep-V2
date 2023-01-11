setScreen("startscreen");
var score = 0;
function countdown() {
  showElement("3");
  playSound("assets/category_pop/deep_bubble_notification.mp3", false);
  setTimeout(function () {
    hideElement("3");
    showElement("2");
    playSound("assets/category_pop/deep_bubble_notification.mp3", false);
    setTimeout(function () {
      hideElement("2");
      showElement("1");
      playSound("assets/category_pop/deep_bubble_notification.mp3", false);
      setTimeout(function () {
        hideElement("1");
        showElement("go");
        playSound(
          "assets/category_points/vibrant_game_gold_crystal_bling_touch_1.mp3",
          false
        );
        setTimeout(function () {
          hideElement("go");
          showElement("Circle");
          showElement("scoredisplay");
        }, 650);
      }, 725);
    }, 725);
  }, 750);
}
function hidetargets() {
  hideElement("Circle");
  hideElement("go");
  hideElement("3");
  hideElement("2");
  hideElement("1");
}
onEvent("playnow", "click", function () {
  score = 0;
  setScreen("gameplay");
  setText("scoredisplay", "Score: " + score);
  hidetargets();
  countdown();
  setTimeout(function () {
    setScreen("endscreen");
    setText("scoreend", "You scored " + score + "!");
    playSound("assets/category_achievements/peaceful_win_2.mp3", false);
  }, 15000);
});
onEvent("tryagain", "click", function () {
  setScreen("startscreen");
});
onEvent("Circle", "click", function () {
  playSound("assets/category_bell/notification_4.mp3", false);
  var size = randomNumber(40, 120);
  setSize("Circle", size, size);
  score = score + 1;
  setPosition("Circle", randomNumber(5, 215), randomNumber(60, 345));
  setText("scoredisplay", "Score: " + score);
});
