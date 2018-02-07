"use strict";

var username= prompt('Hi good to see you! What is your name?'); 
alert( 'Hi '+ username + ' how is your day? I am going to ask you few question about me. Please answer with yes/no or y/n. Let\'s start.');
console.log ('User was asked for a name and answered: ' + username);
var answer1 = prompt('Do you think I like  pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right ' + username + '! I used to have a rabbit!');
}
else if (answer1 === 'no' || answer1 ==='n'){
  alert('Thats a wrong answer, ' + username + '. I love pets. I used to have a rabbit!');
}
else {
  alert('Sorry that was not a valid answer. Lets move on to the next question.');
}
console.log ('User was asked to answer question whether I like pets and answered: ' + answer1);
var answer2 = prompt('Next question! Do you think I have any brothers?').toLowerCase().trim();

if (answer2 === 'no' || answer2 === 'n'){
  	alert(' Actually ' + username +', I have a brother who lives in Poland.');
}
else if (answer2 === 'y' || answer2 === 'yes'){
  	alert('You are right '+username+ '! I have a younger brother who lives in Poland.');
}
else {		
		alert(username + ', please follow directions.');
}
console.log ('User was asked to answer whether I have brothers and answered: ' + answer2);
var answer3= prompt('Can you quess whether I like travelling?').toLowerCase().trim();
if (answer3 ==='yes' || answer3 ==='y'){
  alert('Yaay! I love travelling ' + username + '! I have visitied most of Europe, part of Asia and USA so far.');
}
else if (answer3 ==='no' || answer3 ==='n'){
  alert('Wrong! I do love travelling ' + username + '! I have visitied most of Europe, part of Asia and USA.'); 
}
else {
  alert(username + ', stick to the plan!');
}
console.log ('User was asked whether I love travelling and answered: ' + answer3);
var answer4 = prompt('Do you think I love pizza?').toLowerCase().trim();
if (answer4 ==='n' || answer4==='no'){
	alert('Correct! I hate pizza '+ username + '!');
}
else if(answer4 ==='y' || answer4==='yes'){
	alert('Nope! I hate pizza!');
}
else {
	alert('Did you type y/n or yes/no!');
}
console.log ('User was asked whether I love pizza and answered: ' + answer4);
var answer5= prompt('Do I go to pilates regularly?').toLowerCase().trim();
if (answer5 === 'y' || answer5==='yes'){
	alert('Yes ' +username+', I have been going to pilates classes for over 2 years.');
}
else if(answer5 === 'n' || answer5==='no'){
	alert('You missed the answer ' + username +', I have been going to pilates classes for over 2 years.');
}
else{
	alert('Was that a typo, ' +username+'?');
}
console.log ('User was asked to answer whether I go to pilates regularily and answered: ' + answer5);
	

