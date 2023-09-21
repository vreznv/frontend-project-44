#!/usr/bin/env node
import runGame from '../src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const gameLogic = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return {
    question,
    correctAnswer,
  };
};

const introMessage = 'Find the greatest common divisor of given numbers.';
runGame(gameLogic, introMessage);
