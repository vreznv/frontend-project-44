#!/usr/bin/env node
import runGame from '../src/index.js';

const generateProgression = (start, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  return progression;
};

const gameLogic = () => {
  const start = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5; // between 5 and 10 inclusive
  const hiddenElementPosition = Math.floor(Math.random() * length);

  const progression = generateProgression(start, difference, length);
  const correctAnswer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';

  const question = progression.join(' ');
  return {
    question,
    correctAnswer,
  };
};

const introMessage = 'What number is missing in the progression?';
runGame(gameLogic, introMessage);
