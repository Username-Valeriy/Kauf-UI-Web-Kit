var bunnyVideo4 = document.getElementById("bVideop1");
var el4 = document.getElementById("playButton4");
//var ey = document.getElementById("pauseButton");
var replay4 = document.getElementById("replayButton4");



//Hide replay button at start
replay4.style.visibility='hidden';

function playPause4() {
  replay4.style.visibility='hidden';
  if (bunnyVideo4.paused)
  {
    bunnyVideo4.play();
    el4.className = "";
  }
  else
  {
    bunnyVideo4.pause();
    el4.className = "playButton4";
  }
}

function playPauseControls4() {
  replay4.style.visibility='hidden';
  if (!bunnyVideo4.paused) {
    el4.className ="";
  } else {
     el4.className = "playButton4";
  }
}

function videoEnd4() {
  replay4.style.visibility='visible';
  el4.className = "";
  bunnyVideo4.setAttribute("controls","controls");
}

function showControls4(){
  bunnyVideo4.setAttribute("controls","controls");
}
function hideControl4s(){
  bunnyVideo4.removeAttribute("controls","controls");
}


bunnyVideo4.addEventListener("click", playPause4, false);
bunnyVideo4.addEventListener("play", playPauseControls4, false);
bunnyVideo4.addEventListener("pause", playPauseControls, false);
bunnyVideo4.addEventListener("mouseover", showControls4, false);
bunnyVideo4.addEventListener("mouseout", hideControls, false);
el4.addEventListener("mouseover", showControls4, false);
replay4.addEventListener("mouseover", showControls4, false);
bunnyVideo4.addEventListener("ended", videoEnd4, false);
