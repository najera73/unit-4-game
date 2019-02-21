//need to start with a random number for the "magic number" 
//The random number shown at the start of the game should be between 19 - 120. will need to eventually be random.
// setting the "Magic Number:" header to show the "targetNumber".
// need to make magic number radom between 19 and 120 - this method seems long. Might be a more efficient way to do this. 
var crystal1Num;
var crystal2Num;
var crystal3Num;
var crystal4Num;
var score = 0;
var min = 19;
var max = 120;
var wins = 0;
var losses = 0;
var targetNumber = Math.floor(Math.random() * (max - min + 1) + min);


game()
//tutor helped me to get this working! originally had vars within scope of function and should have been global
function game() {
    score = 0;
    wins = 0;
    losses = 0;
    min = 19
    max = 120
    //gives each crystal random number 
    crystal1Num = Math.ceil(Math.random() * 12);
    crystal2Num = Math.ceil(Math.random() * 12);
    crystal3Num = Math.ceil(Math.random() * 12);
    crystal4Num = Math.ceil(Math.random() * 12);
    targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    //prints values to DOM 
    $("#mysteryNumber").text("Mystery Number: " + targetNumber);
    $("#score").text("Score: " + score);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}



//$("#crystal1").attr("data-crystalvalue", crystal1Num);
//$("#crystal2").attr("data-crystalvalue", crystal2Num);
//$("#crystal3").attr("data-crystalvalue", crystal3Num);
//$("#crystal4").attr("data-crystalvalue", crystal4Num);


$("#crystal1").on("click", function () {
    crystal1Num = parseInt(crystal1Num);
    score += crystal1Num
    winOrLose(crystal1Num);
    //$("#score").text("Score: " + score);
    //console.log(crystal1Num);
    // Clicking the crystal triggers an alert message.
    //alert("You clicked crystal 1!"); - turned off, no need anymore. 

});

//this funtion captures the crystal click event 
$("#crystal2").on("click", function () {
    crystal2Num = parseInt(crystal2Num);
    score += crystal2Num
    //$("#score").text("Score: " + score);

    //console.log(crystal2Num);
    winOrLose(crystal2Num);
    // Clicking the crystal triggers an alert message.
    //alert("You clicked crystal 2!");

});

//this funtion captures the crystal click event 
$("#crystal3").on("click", function () {
    //adding cyrstal value to score - thank you Robert!!
    crystal3Num = parseInt(crystal3Num);
    score += crystal3Num
    winOrLose(crystal3Num);
    //$("#score").text("Score: " + score);

    //console.log(crystal3Num);

    // Clicking the crystal triggers an alert message.
    //alert("You clicked crystal 3!");

});

//this funtion captures the crystal click event 
$("#crystal4").on("click", function () {
    crystal4Num = parseInt(crystal4Num);
    score += crystal4Num
    //$("#score").text("Score: " + score);
    //console.log(crystal4Num);
    winOrLose(crystal4Num);

    // Clicking the crystal triggers an alert message.
    //alert("You clicked crystal 4!");

});

function winOrLose(newScore) {
    $("#score").text("Score: " + score);
    console.log(newScore);
    if (targetNumber === score) {
        wins++; 
        $("#wins").text("Wins: " + wins);
        alert("You win");
    }
    else {
        if (targetNumber < score) {
            losses++
            $("#losses").text("Losses: " + losses);

        alert("you lose");
        }
        else {
            console.log("keep playing");
        }
    }
}

//reset for play again button 
$("#reset").on("click", function () {
    game()

});


