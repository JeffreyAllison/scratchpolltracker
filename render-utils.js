export function renderPoll(previousPolls, optionA, optionAScore, optionB, optionBScore) {
  const div = document.createElement('div');
  const optionADiv = renderOption(optionA, optionAScore);
  const optionBDiv = renderOption(optionB, optionBScore);
  const previousPollsDiv = renderOption(previousPolls);

  div.classList.add('poll');

  div.append(previousPollsDiv, optionADiv, optionBDiv);

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