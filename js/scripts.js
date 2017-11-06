






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
