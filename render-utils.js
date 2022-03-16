export function renderPoll(pollQuestion, optionA, optionB, optionAScore, optionBScore) {
  const div = document.createElement('div');
  const optionADiv = renderOption(optionA, optionAScore);
  const optionBDiv = renderOption(optionB, optionBScore);
  const pollQuestionDiv = renderOption(pollQuestion);

  div.append(pollQuestionDiv, optionADiv, optionBDiv);

  div.classList.add('poll');

  return div;
}

export function renderOption(option, vote) {
  const optionDiv = document.createElement('div');
  const voteDiv = document.createElement('p');

  optionDiv.textContent = option;
  voteDiv.textContent = vote;

  optionDiv.append(voteDiv);

  return optionDiv;
}