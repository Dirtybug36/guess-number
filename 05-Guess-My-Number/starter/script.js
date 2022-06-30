'use strict';
/*
console.log(document.querySelector('.message').textContent);
//the document queryselector first selects the element(.message is a class) and the .textcontent selects the text inside of that element
document.querySelector('.message').textContent = 'Correct Number!!!!';
document.querySelector('.score').textContent = '30';

document.querySelector('.guess').value = '10'; //we use .value for the input type
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc le decimal hatauxa,math.random le just 0 t0 1 samma dekhauxa so *20 garem which also shows until 19 so we add 1 at last
let score = 20;
let highScore = 0;

//lets make a function to restructure the repeated codes
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.btn.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when player clicks Again!!

  document.querySelector('.btn.again').addEventListener('click', function () {
    //my Method
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    // document.querySelector('.label-score').textContent = '💯 Score: 20';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    //teacher method
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.score').textContent = score;
    displayScore(score);
  });
  //when player doesnot guesses
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!!!!';
    displayMessage('No Number!!!!');
    //when player guesses right!!!
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!!!!';
    displayMessage('Correct Number!!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //IMP
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //document.querySelector('.number').value;
  }
  //restructuring the repeated code
  else if (score !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? 'Too Low!!' : 'Too High!!';
      score--;
      displayMessage(guess < secretNumber ? 'Too Low!!' : 'Too High!!');
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You loose again!!!!';
      displayMessage('You loose again!!!!');
    }
  }
});

//    //when player guesses too low!!!
//    else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You loose again!!!!';
//     }
//   }

//   //when player guesses too high!!!
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You loose again!!!!';
//     }
//   }
// });
//suru ma queryselector le (btn.check) ko element lae select garyo.addeventlistner le jaba hamile tyo check ma click garxau ani balla tesle kaam garxa
//hamile eventlistener lae function sanga add garyeu. jaba hamile kunai number(value) type garxau tyo event listener le listen garera react garxa.
//if without number hamile click garyeu vane chai !guess wala function le hamilae NO number dekhauxa
