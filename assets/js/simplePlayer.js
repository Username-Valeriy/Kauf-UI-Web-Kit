/*Experiencing Issues with Pause Function. Will be worked out soon*/
/*Idea: add listener for hover while playing show pause*/

var bunnyVideo = document.getElementById("bVideo");
var el = document.getElementById("playButton");
//var ey = document.getElementById("pauseButton");
var replay = document.getElementById("replayButton");



//Hide replay button at start
replay.style.visibility='hidden';

function playPause() {
  replay.style.visibility='hidden';
  if (bunnyVideo.paused)
  {
    bunnyVideo.play();
    el.className = "";
  }
  else
  {
    bunnyVideo.pause();
    el.className = "playButton";
  }
}

function playPauseControls() {
  replay.style.visibility='hidden';
  if (!bunnyVideo.paused) {
    el.className ="";
  } else {
     el.className = "playButton";
  }
}

function videoEnd() {
  replay.style.visibility='visible';
  el.className = "";
  bunnyVideo.setAttribute("controls","controls");
}

function showControls(){
  bunnyVideo.setAttribute("controls","controls");
}
function hideControls(){
  bunnyVideo.removeAttribute("controls","controls");
}


bunnyVideo.addEventListener("click", playPause, false);
bunnyVideo.addEventListener("play", playPauseControls, false);
bunnyVideo.addEventListener("pause", playPauseControls, false);
bunnyVideo.addEventListener("mouseover", showControls, false);
bunnyVideo.addEventListener("mouseout", hideControls, false);
el.addEventListener("mouseover", showControls, false);
replay.addEventListener("mouseover", showControls, false);
bunnyVideo.addEventListener("ended", videoEnd, false);

/*Experiencing Issues with Pause Function. Will be worked out soon*/
/*Idea: add listener for hover while playing show pause*/

var bunnyVideo2 = document.getElementById("bVideo2");
var el2 = document.getElementById("playButton2");
//var ey = document.getElementById("pauseButton");
var replay2 = document.getElementById("replayButton2");



//Hide replay button at start
replay2.style.visibility='hidden';

function playPause2() {
  replay2.style.visibility='hidden';
  if (bunnyVideo2.paused)
  {
    bunnyVideo2.play();
    el2.className = "";
  }
  else
  {
    bunnyVideo2.pause();
    el2.className = "playButton2";
  }
}

function playPauseControls() {
  replay2.style.visibility='hidden2';
  if (!bunnyVideo2.paused) {
    el2.className ="";
  } else {
     el.className = "playButton2";
  }
}

function videoEnd2() {
  replay2.style.visibility='visible2';
  el2.className = "";
  bunnyVideo2.setAttribute("controls","controls");
}

function showControls2(){
  bunnyVideo2.setAttribute("controls","controls");
}
function hideControls2(){
  bunnyVideo2.removeAttribute("controls","controls");
}


bunnyVideo2.addEventListener("click", playPause2, false);
bunnyVideo2.addEventListener("play", playPauseControls, false);
bunnyVideo2.addEventListener("pause", playPauseControls, false);
bunnyVideo2.addEventListener("mouseover", showControls2, false);
bunnyVideo2.addEventListener("mouseout", hideControls2, false);
el2.addEventListener("mouseover", showControls2, false);
replay2.addEventListener("mouseover", showControls2, false);
bunnyVideo2.addEventListener("ended", videoEnd2, false);


/*Experiencing Issues with Pause Function. Will be worked out soon*/
/*Idea: add listener for hover while playing show pause*/

var bunnyVideo3 = document.getElementById("bVideo3");
var el3 = document.getElementById("playButton3");
//var ey = document.getElementById("pauseButton");
var replay3 = document.getElementById("replayButton3");



//Hide replay button at start
replay3.style.visibility='hidden';

function playPause3() {
  replay3.style.visibility='hidden';
  if (bunnyVideo3.paused)
  {
    bunnyVideo3.play();
    el3.className = "";
  }
  else
  {
    bunnyVideo3.pause();
    el3.className = "playButton3";
  }
}

function playPauseControls3() {
  replay3.style.visibility='hidden3';
  if (!bunnyVideo3.paused) {
    el3.className ="";
  } else {
     el3.className = "playButton3";
  }
}

function videoEnd3() {
  replay3.style.visibility='visible3';
  el3.className = "";
  bunnyVideo3.setAttribute("controls","controls");
}

function showControls3(){
  bunnyVideo3.setAttribute("controls","controls");
}
function hideControls3(){
  bunnyVideo3.removeAttribute("controls","controls");
}


bunnyVideo3.addEventListener("click",playPause3, false);
bunnyVideo3.addEventListener("play", playPauseControls, false);
bunnyVideo3.addEventListener("pause", playPauseControls, false);
bunnyVideo3.addEventListener("mouseover", showControls3, false);
bunnyVideo3.addEventListener("mouseout", hideControls3, false);
el3.addEventListener("mouseover", showControls3, false);
replay3.addEventListener("mouseover", showControls3, false);
bunnyVideo3.addEventListener("ended", videoEnd3, false);
