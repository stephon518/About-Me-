'use strict';
var totalCorrect = 0;
var userName= prompt('Hello! What is your name?');
alert('Welcome ' + userName + ', you are about to learn all about Stephon Knight.');
// this function will ask a question to the user and give back a proper response
function yesNo(){
  var happy= prompt('Are you happy?');
  if (happy.toLowerCase() === 'y' || happy.toLowerCase() === 'yes' ){
    alert('Correct! You are the happiest!');
    totalCorrect++;
  } else if (happy.toLowerCase() === 'n' || happy.toLowerCase() === 'no'){
    alert('Incorrect! Cheer up ' + userName);
  }
  else {
    alert('Please enter y or n');
  }

  var knowIt= prompt('Do you know it?');
  if (knowIt.toLowerCase() === 'y' || knowIt.toLowerCase() === 'yes'){
    alert('Correct! You know what\'s up!');
    totalCorrect++;
  } else if (knowIt.toLowerCase() === 'n' || knowIt.toLowerCase() === 'no'){
    alert('Incorrect, you gon learn today ' + userName + ' !');
  } else {
    alert('Please enter y or n');
  }

  var face= prompt('Does your face surely show it?');
  if (face.toLowerCase() === 'y' || face.toLowerCase() === 'yes'){
    alert('Correct! What a face it is!');
    totalCorrect++;
  } else if (face.toLowerCase() === 'n' || face.toLowerCase() === 'no'){
    alert('Incorrect! ' + userName + ' is a sad panda!');
  } else {
    alert('Please enter y or n');
  }

  var clap= prompt('Did you clap your hands?');
  if (clap.toLowerCase() === 'y' || clap.toLowerCase() === 'yes'){
    alert('Correct! That was loud!');
    totalCorrect++;
  } else if (clap.toLowerCase() === 'n' || clap.toLowerCase() === 'no'){
    alert('Incorrect! ' + userName + ', don\'t tell me you missed!');
  } else {
    alert('Please enter y or n');
  }

  var stomp= prompt('Did you stomp your feet?');
  if (stomp.toLowerCase() === 'y' || stomp.toLowerCase() === 'yes'){
    alert('Correct! Happy feet!');
    totalCorrect++;
  } else if (stomp.toLowerCase() === 'n' || stomp.toLowerCase() === 'no'){
    alert('Incorrect !' + userName + ' get moving!');
  } else {
    alert('Please enter y or n');
  }
  alert(userName + ', thank you for being happy and visiting my website!');
}
//calling the function yesno();
yesNo();

//this will ask a yes or no question
function spicy(){
  for(var i=0; i < 4; i++){
    var numSpice = parseInt(prompt('How spicy do I like my food out of 5 start?'));
    console.log('User chose spice level ' + numSpice);
    if(numSpice === 4){
      alert('Correct!');
      totalCorrect++;
      break;
    }else if(numSpice > 4){
      alert('Too high!');
    }else if(numSpice < 4){
      alert('Too low!');
    }if(i === 3){
      alert('You\'re out of tries! The correct asnwer is 4!');
      break;
    }
  }
}
spicy();

function travel(){
  var myTravels = ['london', 'hawaii', 'sweden'];
  var flag = false;
  for(var j = 0; j < 6; j++){
    var guess = prompt('Guess a tourist destination I have traveled to.');
    for(var n = 0; n < myTravels.length; n++){
      if(guess.toLowerCase() === myTravels[n]){
        alert('Correct! I have been to ' + myTravels[0] + ', ' + myTravels[1] + ' & ' + myTravels[2]);
        totalCorrect++;
        flag = true;
      }
    }
    if(flag===true){
      break;
    } else{
      alert('Nope! I wish!');
    }
    if(j === 5){
      alert('You\'re out of tries! The correct asnwers are ' + myTravels[0] + ', ' + myTravels[1] + ' & ' + myTravels[2]);
      break;
    }

  }
}
travel();

alert('You guessed ' + totalCorrect + '/7 correst answers! Well done!');
