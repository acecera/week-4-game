window.onload = function() {
var crystalRuby = [];
var crystalDiamond = [];
var crystalYellowDiamond = [];
var crystalEmerald = [];
var wins = 0;
var losses = 0;
var userScore = [];
var getRandomNumber = [];
},

//This function chooses a random number for the user to guess to 
function getRandomNumber() {
    getRandomNumber.innerHTML = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $(".crystalScore").text(getRandomNumber);
}

//function for crystalRuby value 
function crystalRuby() {
var crystalRuby = Math.floor((Math.random() * 12) + 1);
return result;
}

//function for crystalDiamond value
function crystalDiamond() {
var crystalDiamond = Math.floor((Math.random() * 12) + 1);
return result;
}

//function for crystalYellowDiamond value 
function crystalYellowDiamond(){
var crystalYellowDiamond = Math.floor((Math.random() * 12) + 1);
return result;
}

//function for crystalEmerald value 
function crystalEmerald(){
var crystalEmerald = Math.floor((Math.random() * 12) + 1);
return result;
}
//This function logs the crystal value to the image for each 
//crystal and returns the result to the userScore box.
$(document).on("click", ".crystalRuby",  function() {
  var userScore = crystalRubyValue;
  updateUserScore;
  scoreCheck();
  $(".crystalRuby").text(this);
}),
$(".crystalDiamond").on("click", ".crystalDiamond",  function() {
    var userScore = crystalDiamondValue;
    updateUserScore;
    scoreCheck();
    $(".crystalDiamond").text(this);
}),
$(".crystalYellowDiamond").on("click", ".crystalYellowDiamond", function() {
    var userScore = crystalYellowDiamond;
    updateUserScore;
    scoreCheck();
    $(".crystalYellowDiamond").text(this);
}),
$(".crystalEmerald").on("click", ".crystalEmerald", function() {
    var userScore = crystalEmerald;
    updateUserScore;
    scoreCheck();
    $(".crystalEmerald").text(this);
}),

//this function checks the score 

function scoreCheck() {
    if (userScore < randomNumber) {
        updateUserScore;
    } 
    if (userScore > randomNumber) {
        losses = losses + 1;
        document.querySelector(".losses").innerHTML = this.losses + 1;
        $(".losses").update("losses");
    }    
    if (userScore === randomNumber) {
        wins = wins + 1;
        document.querySelector(".wins").innerHTML = this.wins + 1;
        $(".wins").update("wins");
    };
},

//This function restarts the game 

function restartGame() {
    this.crystalRuby = [];
    this.crystalDiamond = [];
    this.crystalYellowDiamond = [];
    this.crystalEmerald = [];
    this.userScore = [];
    this.randomNumber = [];
};