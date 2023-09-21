import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (gameLogic, introMessage, rounds = 3) => {
  const name = greetUser();
  console.log(introMessage);

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
