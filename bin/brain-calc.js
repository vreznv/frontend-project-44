#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const playGame = () => {
  const name = greetUser();

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const operation = operations[getRandomInt(0, operations.length - 1)];

    console.log(`Question: ${num1} ${operation} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculate(num1, num2, operation);
    
    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();
