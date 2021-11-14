var buttonColors=['red','green','blue','yellow'];
var userClickedPattern=[];
var gamePattern=[];
var level=0;

function nextSequence(){
  var randomnumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomnumber];
  gamePattern.push(randomChosenColor);
  playsound(randomChosenColor);
  level++;
}


$('div').on('click',function(){
  var userChosenColor=this.id;
  playsound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});
console.log(userClickedPattern);

function playsound(color){
  $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio('sounds/'+color+'.mp3');
  audio.play();
}


$(document).keypress(function(){
  $('h1').text('Level: '+level);
  if (level===0){
      nextSequence()
  }
})

function checkAnswer(currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        $('h1').text('Level: '+level);
        userClickedPattern=[];
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      $('body').addClass('game-over');
      setTimeout(function () {
        $('body').removeClass('game-over');
      }, 1000);
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();
      $('h1').text('press A key to start')
      gameOver();

    }

}

function gameOver(){
  userClickedPattern=[];
  gamePattern=[];
  level=0;
}
