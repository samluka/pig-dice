$(function throwDie() {
var firstdice = document.getElementById("firstdice");
var seconddice = document.getElementById("seconddice");
var results = document.getElementById("results");
var   dice1  = Math.floor(Math.random() * 6) + 1;
var      dice2 = Math.floor(Math.random() * 6) + 1;
var diceTotal = dice1 + dice2;
firstdice.innerHTML = dice1;
seconddice.innerHTML = dice1;
results.innerHTML = "rolling rolling rolled"+diceTotal+ "!" ;
if (dice1 == dice2) {

  results.innerHTML += " ¡felicidades! you are up for another round " ;
}

});
