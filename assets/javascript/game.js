window.onload = function() {
var crystalRuby = crystalPoints();
var crystalDiamond = crystalPoints();
var crystalYellowDiamond = crystalPoints();
var crystalEmerald = crystalPoints();
var playerGuess = 0;
var wins = 0;
var losses = 0;
var crystalScore = 0;
var randomNumber = getRandomNumber();
};

//This function chooses a random number for the user to guess to 
function getRandomNumber(19,120) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor((Math.random() * (120 - 19)) + 19);
    $(".crystalScore").text(getRandomNumber);
}
//This function chooses a random for each crystal
function crystalPoints(1,12) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor((Math.random() * (12-1)) + 1);
}
$(".crystal").on("click", function(crystalPoints) {
    $(".crystalRuby").display(crystalPoints);
})