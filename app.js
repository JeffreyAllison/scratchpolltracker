import { renderPoll } from './render-utils.js';

// import functions and grab DOM elements

const currentPollEl = document.getElementById('current-poll-container');

const previousPollsEl = document.getElementById('previous-poll-container');

const beginPollingButton = document.getElementById('begin-polling-button');
const pollQuestionAdd = document.getElementById('poll-question-input');
const optionAAddButton = document.getElementById('option-a-add');
const optionBAddButton = document.getElementById('option-b-add');
const optionAUndoButton = document.getElementById('option-a-undo');
const optionBUndoButton = document.getElementById('option-b-undo');
const closePollButton = document.getElementById('close-poll-button');
const optionAInput = document.getElementById('poll-option-a-input');
const optionBInput = document.getElementById('poll-option-b-input');
const currentPollQuestion = document.getElementById('poll-question-label');


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
  currentPollQuestion.textContent = pollQuestion;
  optionA = optionAInput.value;
  optionB = optionBInput.value;

  //pollQuestionAdd.value = '';
  //optionAInput.value = '';
  //optionBInput.value = '';

  displayCurrentPollEl();

});

optionAAddButton.addEventListener('click', () => {
  optionAScore++;

  displayCurrentPollEl();

});

optionBAddButton.addEventListener('click', () => {
  optionBScore++;

  displayCurrentPollEl();

});

optionAUndoButton.addEventListener('click', () => {
  optionAScore--;

  displayCurrentPollEl();

});

optionBUndoButton.addEventListener('click', () => {
  optionBScore--;

  displayCurrentPollEl();

});

closePollButton.addEventListener('click', () => {

  const previousPoll = {
    pollQuestion: pollQuestion,
    optionA: optionA,
    optionAScore: optionAScore,
    optionB: optionB,
    optionBScore: optionBScore,
  };

  //pollQuestion = '';
  //optionA = '';
  //optionAScore = 0;
  //optionB = '';
  //optionBScore = 0;

  previousPolls.push(previousPoll);

  displayAllPolls();

});

function displayCurrentPollEl () {
  currentPollEl.textContent = '';


  //optionAInput.textContent = optionA;
  //optionBInput.textContent = optionB;

  const pollEl = renderPoll(previousPolls, optionA, optionAScore, optionB, optionBScore);

  pollEl.classList.add('current');

  currentPollEl.append(pollEl);

}

function displayAllPolls () {
  previousPolls.textContent = '';
  currentPollQuestion.textContent = '';
  optionAInput.textContent = '';
  optionBInput.textContent = '';



  for (let poll of previousPolls) {
    const pollEl = renderPoll(poll.previousPolls, poll.optionA, poll.optionAScore, poll.optionB, poll.optionBScore);
    //pollcastEl.classList.add('previous');
    previousPollsEl.append(pollEl);

  }
}
