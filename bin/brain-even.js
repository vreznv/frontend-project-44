#!/usr/bin/env node
import runGame from '../src/index.js';

const gameLogic = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return {
    question: String(number),
    correctAnswer,
  };
};

const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(gameLogic, introMessage);
