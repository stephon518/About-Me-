'use strict';

// // function to ensure a valid yes or no response // function verifyResponse(answer) {
// // function verifyResponse(answer) {

// // if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') 
// // { return 'yes'; 
// // } else if (answer.toLowerCase()=== 'no' || answer.toLowerCase() === 'n') { return 'no';
// //  } else { 
// //    return 'reprompt'; 
// //    } 
// // // }

// // // collecting visitor name
// // // function visitorName() { 
// //   let visitorName = prompt ('Welcome to my About Me page. What is your Name?'); console.log('Our visitor is named ' + vistorName); 
// //   return vistorName; 
// // // }

// // // guessing game question 1 
// // // function guessingGame1() { 
// //   var response1= prompt('Did I grow up in Oakland?'); 
// //   console.log(visitor + ' responded ' + response1 + ' to question 1'); 
// //   var guess1 = verifyResponse(response1); 
// //   while(guess1 === 'reprompt') { 
// //     response1 = prompt ('please answer with yes or no. Did I grow up in Oakland?);
// //      guess1 = verifyResponse(response1); 
// //   } 
// //     if (guess1 === 'yes') { 
// //       alert('I am sorry, you are incorrect'); 
// //     } else if (guess1 === 'no') { 
// //       alert('You are correct!');

var username = prompt(' whats your name? ')
alert(' welcome to my page, ' + username)

var cityigrewupin = prompt(' did I grow up in Oakland ')
if(cityigrewupin.toLowerCase() === 'yes'){
  alert('yes correct!')

} else {
  alert('Wrong')
}


var username = prompt(' where do i wanna vacation? ')
alert(' Hawaii ' + username)

var cityigrewupin = prompt(' Do i wanna go to Hawaii ')
if(cityigrewupin.toLowerCase() === 'yes'){
  alert('yes correct!')

} else {
  alert('Wrong')
}


var username = prompt(' whats your favorite color ')
alert(' Black ' + username)

var cityigrewupin = prompt(' Do you wanna go to the store? ')
if(cityigrewupin.toLowerCase() === 'yes'){
  alert('Yes')

} else {
  alert('Fine ill go myself')
}



