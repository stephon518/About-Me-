<!DOCTYPE html>
<html>
<head>
<title>About Me</title>
</head>
<body>

<h1>About Me, Guessing Game</h1>
<p>Hi I’m Stephon Knight Monroe,
I grew up in the Bay Area and currently attending code fellows online. Prior to starting code fellows, I attended Year Up Bay Area where I was trained hands-on from skilled developers with professional internships at some of the Bay Area’s top companies. I’m very motivated to complete this program and want to take full advantage of the opportunities this program will provide for me.</p>>
  
  
  <p>My goals that I have is to complete code fellows because I’ve always had a passion for technology and software development. I’m motivated to drive myself forward to complete tasks.</p>

  <script src="app.js"></script>
</body>
</html>




'use strict';

<<<<<<< HEAD
// function to ensure a valid yes or no response // function verifyResponse(answer) {
// function verifyResponse(answer) {

if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') 
{ return 'yes'; 
} else if (answer.toLowerCase()=== 'no' || answer.toLowerCase() === 'n') { return 'no';
 } else { 
   return 'reprompt'; 
   } 
// }

// collecting visitor name
// function visitorName() { 
  let visitorName = prompt ('Welcome to my About Me page. What is your Name?'); console.log('Our visitor is named ' + vistorName); 
  return vistorName; 
// }

// guessing game question 1 
// function guessingGame1() { 
  var response1= prompt('Did I grow up in Oakland?'); 
  console.log(visitor + ' responded ' + response1 + ' to question 1'); 
  var guess1 = verifyResponse(response1); 
  while(guess1 === 'reprompt') { 
    response1 = prompt ('please answer with yes or no. Did I grow up in Oakland?);
     guess1 = verifyResponse(response1); 
  } 
    if (guess1 === 'yes') { 
      alert('I am sorry, you are incorrect'); 
    } else if (guess1 === 'no') { 
      alert('You are correct!');
=======
// function to ensure a valid yes or no response
// function verifyResponse(answer) {

if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  return 'yes';
 } else if (answer.toLowerCase()=== 'no' || answer.toLowerCase() === 'n') {
  return 'no';
 } else {
  return 'reprompt';
 }
// }

// collecting visitor name
// function visitorName() {
  let visitorName = prompt ('Welcome to my About Me page. What is your Name?');
  console.log('Our visitor is named ' + vistorName);
  return vistorName;
// }

// guessing game question 1
// function guessingGame1() {
  var response1= prompt('Did I grow up in Oakland?');
  console.log(visitor + ' responded ' + response1 + ' to question 1');
  var guess1 = verifyResponse(response1);
  while(guess1 === 'reprompt') {
    response1 = prompt ('please answer with yes or no. Did I grow up in Oakland?);
    guess1 = verifyResponse(response1);
   }
   if (guess1 === 'yes') {
      alert('I am sorry, you are incorrect');
   } else if (guess1 === 'no') {
     alert('You are correct!');
>>>>>>> 7064f35680ee787ba4e268d4f1b7289be9d22b9c
