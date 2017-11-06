






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
