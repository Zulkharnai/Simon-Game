// alert("Hello");

var buttomcolor = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence() {
    var randomnumber = Math.ceil(Math.random() * 3)
    var randomChosenColour  = buttomcolor[randomnumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#"+ gamePattern).fadeIn(100).fadeOut(100).fadeIn(100);
}
nextSequence();

