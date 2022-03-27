import { nativeMatch } from "./search/nativeMatch.js";
import { runTime } from "./services/runTime.js";

// Search
const string = document.querySelector(`#nativeString`);
const subString = document.querySelector(`#nativeSubString`);
const result = document.querySelector(`#nativeResult`);
const resultText = document.querySelector(`#nativeResultText`);

result.addEventListener('click', () => {
  resultText.innerHTML = `ответ: ${nativeMatch(string.value, subString.value)}, время - 
  ${runTime(() => nativeMatch(string.value, subString.value))}`;
});

