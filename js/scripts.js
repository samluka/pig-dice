






document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    //what happens when someone clicks the button
    //first we need a random number
    var dice = Math.floor(Math.random() *6) + 1

    //then we need to display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // update round score but only if the rolled number was not a 1

         if(dice !== 1){//if dice is different from 1
           //add score
           roundScore += dice;
           // display the score
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
           } else {
             //next player
             nextPlayer();
         }

     }

   });

   document.querySelector('.btn-hold').addEventListener('click', function(){
     if (gamePlaying){
       //add current score to players overall score
       scores[activePlayer] += roundScore;

       //update UI
       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

       //check if player won the game?
       if (scores[activePlayer] >= 100){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
       } else {
           nextPlayer();
         }
     }

   });

   function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');


     document.querySelector('.dice').style.display = 'none'
   }


//starting a new game after one player wins or both players draw
document.querySelector('.btn-new').addEventListener('click', init);

//where the new game is started ;after clicking the start new game
function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none'
  //sets all current values to zero
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  //sets all current values to zero
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}
