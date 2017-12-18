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
function crystalRubyValue() {
var crystalRuby = Math.floor((Math.random() * 12) + 1);
return result;
console.log(crystalRubyValue);
$('.crystalRuby').html(crystalRubyValue);
}

//function for crystalDiamond value
function crystalDiamondValue() {
var crystalDiamond = Math.floor((Math.random() * 12) + 1);
return result;
console.log(crystalDiamondValue);
$('.crystalDiamond').html(crystalDiamondValue)
}

//function for crystalYellowDiamond value 
function crystalYellowDiamondValue(){
var crystalYellowDiamond = Math.floor((Math.random() * 12) + 1);
return result;
console.log(crystalYellowDiamondValue);
$('.crystalYellowDiamond').html(crystalYellowDiamondValue);
}

//function for crystalEmerald value 
function crystalEmeraldValue(){
var crystalEmerald = Math.floor((Math.random() * 12) + 1);
return result;
console.log(crystalEmeraldValue);
$('.crystalEmerald').html(crystalEmeraldValue);
}
//This function logs the crystal value to the image for each 
//crystal and returns the result to the userScore box.
$(document).on("click", ".crystalRuby",  function() {
  var userScore = crystalRubyValue;
  $(".userScore").update(UserScore);
  scoreCheck();
  $(".crystalRuby").text(this);
}),
$(document).on("click", ".crystalDiamond",  function() {
    var userScore = crystalDiamondValue;
    $(".userScore").update(UserScore);
    scoreCheck();
    $(".crystalDiamond").text(this);
}),
$(document).on("click", ".crystalYellowDiamond", function() {
    var userScore = crystalYellowDiamond;
    $(".userScore").update(UserScore);
    scoreCheck();
    $(".crystalYellowDiamond").text(this);
}),
$(document).on("click", ".crystalEmerald", function() {
    var userScore = crystalEmerald;
    $(".userScore").update(UserScore);
    scoreCheck();
    $(".crystalEmerald").text(this);
}),

//this function checks the score and adds up wins and losses 

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