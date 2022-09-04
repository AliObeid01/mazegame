window.addEventListener('DOMContentLoaded', (event) => {

var redDiv = document.querySelectorAll(".boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var status = document.getElementById("status");
var scoreDiv = document.querySelector("div.boundary.example");
var score=0;

redDiv.onmouseover = function() {mouseOverWall()};
start.onmouseover = function() {mouseOverStart()};
end.onmouseover = function() {mouseOverEnd()};
start.onclick = function() {onclickStart()};

function mouseOverWall() {

  status.innerHTML = "YOU LOSE SCORE -5:(";
  scoreDiv.innerHTML= score-=5;
  scoreDiv.style.textAlign = "center";

}

function mouseOverStart() {

   for (let i = 0; i < redDiv.length; i++) {
   redDiv[i].style.backgroundColor = "#eeeeee";
 }
  status.innerHTML = "Begin by moving your mouse over the ''S''.";

}

function onclickStart() {

 for (let i = 0; i < redDiv.length; i++) {
   redDiv[i].style.backgroundColor = "#eeeeee";
 } 
   status.innerHTML = "Begin by moving your mouse over the ''S''.";
   scoreDiv.innerHTML= score=0;
   scoreDiv.style.textAlign = "center";
   
}

function mouseOverEnd() {

   status.innerHTML = "YOU WIN SCORE +10 :)";
   scoreDiv.innerHTML= score+=10;
   scoreDiv.style.textAlign = "center";

}

   console.log('DOM fully loaded and parsed');
});

