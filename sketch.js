var canvas , backgroundImage;
var gameState=0;
var contestantCount;
var allContestants;
var question,answer;
var contestant,quiz;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database(); 
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
  if(gameState===2){
    game.end();
  }
}
