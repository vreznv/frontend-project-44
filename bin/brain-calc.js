#!/usr/bin/env node
import runGame from '../src/index.js';

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

const gameLogic = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operation));

  return {
    question,
    correctAnswer,
  };
};

const introMessage = 'What is the result of the expression?';
runGame(gameLogic, introMessage);
