window.addEventListener('DOMContentLoaded', (event) => {


var redDiv = document.getElementsByClassName("boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var status = document.getElementById("status");
var scoreDiv = document.querySelector("div.boundary.example");
var user;
var score=0;
var timer;
var excuteStart=0;
var excuteEnd=0;


start.onmouseover = function() {mouseOverStart()};
end.onmouseover = function() {mouseOverEnd()};
start.onclick = function() {onclickStart()};

function mouseOverStart() {

  for (let i = 0; i < redDiv.length; i++) {
    redDiv[i].style.backgroundColor = "#eeeeee";
 }
    
    excuteEnd=1;
    
 } 	


function onclickStart() {
  var time=0;
  excuteStart=1;
  excuteEnd=1;
  
for (let i = 0; i < redDiv.length; i++){

if(excuteStart==1){

redDiv[i].addEventListener('mouseover', function handleMouseOver() {
  excuteStart=0; 
  redDiv[0].style.backgroundColor = "red";
  redDiv[1].style.backgroundColor = "red";
  redDiv[2].style.backgroundColor = "red";
  redDiv[3].style.backgroundColor = "red";
  redDiv[4].style.backgroundColor = "red";

  status.innerHTML = "YOU LOSE:( SCORE -5";
  scoreDiv.innerHTML= score-=5;
  scoreDiv.style.textAlign = "center";
  excuteEnd=0;
  
});
}

else{
return;
}

}

  for (let i = 0; i < redDiv.length; i++) {
   redDiv[i].style.backgroundColor = "#eeeeee";
 } 
   
  scoreDiv.innerHTML= score=0;
  scoreDiv.style.textAlign = "center";
   
  timer = setInterval(function(){
     
    if(time == 10){
      clearInterval(timer);
      status.innerHTML = "Time End.Press start to try again.";
      
      excuteEnd=0;
      return;
    }
     
  status.innerHTML= time+=1;
}, 1000);

  
  
}

function mouseOverEnd() {
  if(excuteEnd==0){

    return ;
}
  else{
    status.innerHTML = "YOU WIN:) SCORE +10";
    scoreDiv.innerHTML= score+=10;
    scoreDiv.style.textAlign = "center";
    localStorage.setItem("scoreSaved", score);
    excuteEnd=0;
}

}

function userName() {
   user = prompt("Please enter your name");
   localStorage.setItem("username", user);
   if (user == localStorage.getItem("username")) {
    status.innerHTML =
    "Hello " + localStorage.getItem("username") + "! Your Score is " + localStorage.getItem("scoreSaved", score)+"<br> Press S to Start.You have just 1 minute.";
  }}

userName();

});

