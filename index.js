var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' + userName + "! Let's play a game");

var count = 0;
function qna (question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You are right');
    count = count + 1; 
  } else {
    console.log(chalk.blue('Wrong answer! The correct answer is ' + answer));
  }
    console.log(chalk.yellow(`Your score is ${count}`));
    console.log('--------')
}

var questions = [
  {
    question: "What is Ironman's name? ",
    answer: 'Tony Stark',
  },
  {
    question: 'Who is the Winter Soldier? ',
    answer: 'Bucky',
  },
  {
    question: "Who was able to pick up Thor’s hammer in Endgame? ",
    answer: 'Captain America',
  },
  {
    question: "What is Captain America’s shield made out of? ",
    answer: 'Vibranium',
  },
  {
    question: 'Black Panther is set in which country? ',
    answer: 'Wakanda',
  },
  {
    question: 'Okay last question. Take a guess who my favourite superhero is.. ',
    answer: 'Spiderman'
  }
]

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  qna(chalk.red(currentQuestion.question),currentQuestion.answer)
}

console.log('Your final score is: ' + count)