/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import functions and grab DOM elements

const currentPollEl = document.getElementById('current-poll-container');
const previousPollsEl = document.getElementById('previous-poll-container');

const beginPollingButton = document.getElementById('begin-polling-button');
const pollQuestionAdd = document.getElementById('poll-question');
const optionAAddButton = document.getElementById('option-a-add');
const optionBAddButton = document.getElementById('option-b-add');
const optionAUndoButton = document.getElementById('option-a-undo');
const optionBUndoButton = document.getElementById('option-b-undo');
const closePollButton = document.getElementById('close-poll-button');
const optionAInput = document.getElementById('poll-option-a');
const optionBInput = document.getElementById('poll-option-b');


// let state
let pollQuestion = '';
let optionA = '';
let optionB = '';
let optionAScore = 0;
let optionBScore = 0;
let previousPolls = [];

// set event listeners 
// get user input
// use user input to update state
// update DOM to reflect the new state

beginPollingButton.addEventListener('click', () => {
  pollQuestion = pollQuestionAdd.value;

  pollQuestionAdd.value = '';

  refreshCurrentPollEl();

});

optionAAddButton.addEventListener('click', () => {
  optionAScore++;

  refreshCurrentPollEl();

});

optionBAddButton.addEventListener('click', () => {
  optionBScore++;

  refreshCurrentPollEl();

});

optionAUndoButton.addEventListener('click', () => {
  optionAScore--;

  refreshCurrentPollEl();

});

optionBUndoButton.addEventListener('click', () => {
  optionBScore--;

  refreshCurrentPollEl();

});

closePollButton.addEventListener('click', () => {

  const previousPolls = {
    optionA: optionA,
    optionB: optionB,
    optionAScore: optionAScore,
    optionBScore: optionBScore,
  };

  previousPolls.push(previousPoll);

  displayAllPolls();

  optionA = '';
  optionB = '';
  optionAScore = 0;
  optionBScore = 0;

  refreshCurrentPollEl();

});