'use strict';
var totalCorrect = 0;

var username = prompt('Hi good to see you! What is your name?');
alert( 'Hi '+ username + ' how is your day? I am going to ask you few question about me. Please answer with yes/no or y/n. Let\'s start.');
console.log ('User was asked for a name and answered: ' + username);

function question1() {
  var answer1 = prompt('Do you think I like  pets?').toLowerCase().trim();
  if (answer1 === 'yes' || answer1 === 'y'){
    alert('You\'re right ' + username + '! I used to have a rabbit!');
    totalCorrect++;
  } else if (answer1 === 'no' || answer1 ==='n'){
    alert('Thats a wrong answer, ' + username + '. I love pets. I used to have a rabbit!');
  } else {
    alert('Sorry that was not a valid answer. Lets move on to the next question.');
  }
  console.log ('User was asked to answer question whether I like pets and answered: ' + answer1);
}
question1();

function question2() {
  var answer2 = prompt('Next question! Do you think I have any brothers?').toLowerCase().trim();
  if (answer2 === 'no' || answer2 === 'n'){
    alert(' Actually ' + username +', I have a brother who lives in Poland.');
  } else if (answer2 === 'y' || answer2 === 'yes'){
    alert('You are right '+ username + '! I have a younger brother who lives in Poland.');
    totalCorrect++;
  } else {
    alert(username + ', please follow directions.');
  }
  console.log ('User was asked to answer whether I have brothers and answered: ' + answer2);
}
question2();

function question3() {
  var answer3= prompt('Can you quess whether I like travelling?').toLowerCase().trim();
  if (answer3 === 'yes' || answer3 === 'y'){
    alert('Yaay! I love travelling ' + username + '! I have visitied most of Europe, part of Asia and USA so far.');
    totalCorrect++;
  } else if (answer3 ==='no' || answer3 === 'n'){
    alert('Wrong! I do love travelling ' + username + '! I have visitied most of Europe, part of Asia and USA.');
  } else {
    alert(username + ', stick to the plan!');
  }
  console.log ('User was asked whether I love travelling and answered: ' + answer3);
}
question3();

function question4() {
  var answer4 = prompt('Do you think I love pizza?').toLowerCase().trim();
  if (answer4 ==='n' || answer4 === 'no'){
    alert('Correct! I hate pizza '+ username + '!');
    totalCorrect++;
  } else if(answer4 === 'y' || answer4 === 'yes'){
    alert('Nope! I hate pizza!');
  } else {
    alert('Did you type y/n or yes/no!');
  }
  console.log ('User was asked whether I love pizza and answered: ' + answer4);
}
question4();

function question5() {
  var answer5= prompt('Do I go to pilates regularly?').toLowerCase().trim();
  if (answer5 === 'y' || answer5 === 'yes'){
    alert('Yes ' + username +', I have been going to pilates classes for over 2 years.');
    totalCorrect++;
  } else if(answer5 === 'n' || answer5 ==='no'){
    alert('You missed the answer ' + username +', I have been going to pilates classes for over 2 years.');
  } else{
    alert('Was that a typo, ' + username +'?');
  }
  console.log ('User was asked whether I go to pilates regularily and answered: ' + answer5);
}
question5();

function question6() {
  var myAnswer = 4;
  var answer6 = parseInt(prompt('Can you guess how many countries I have lived in?'));
  if (answer6 === myAnswer) {
    alert('Correct answer!');

  } else {

    for(var i = 0; i < 3; i++) {
      if (answer6 === myAnswer){
        answer6 = parseInt(alert('Yaay! Correct answer! I lived in 4 countries so far.'));
        break;
      } else if (answer6 > myAnswer) {
        answer6 = parseInt(prompt('The number is too big. Try again.'));
      } else if (answer6 < myAnswer) {
        answer6 = parseInt(prompt('The number is too small. Try again.'));
      } else if (i === 2) {
      
        break;
      } else {
        answer6 = parseInt(prompt(' Is that a typo? Try again.'));
      }

    }
    alert('You missed your chance. The correct answer i I lived in 4 countries.');
  }
  console.log ('User answered that I lived in: ' + answer6 + ' countries.');
}
question6();

function question7() {
  var country = ['poland', 'ireland', 'usa'];
  var answer7 = prompt('What are the countries I lived in?').toLowerCase().trim();


  for (var j = 0; j < 6; j++) { //running loop 6 times asking for answer
    var correct = false;
    for (var k = 0; k < country.length; k++) {// interating through countries
      if (answer7 === country[k]) {
        alert(' You are right! I lived in Poland, Ireland and USA.');
        totalCorrect++;
        correct = true;
        break;
      }
    }

    if (correct) {
      break;
    } else if (j === 5) {
      alert('You missed your chance!The right answer is I lived in Poland, Ireland and USA. ');
      break;

    }	else {
      answer7 = prompt('The answer was wrong. Try again!').toLowerCase().trim();
    }
  }
  console.log (username + ' was asked about countries I lived in and answered: ' + answer7);
}

question7();

if (totalCorrect > 3) {
  alert('Yaaay ' + username +', you answered ' + totalCorrect + ' out of 7 questions correct!');
} else {
  alert('You answered ' + totalCorrect + ' out of 7 guestions correct, '+ username + '. Try your luck again!');
}






