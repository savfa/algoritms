/*
Наивный метод.
Будем говорить, что паттерн p встречается в тексте t со сдвигом s, если 0⩽s⩽n−m и t[s..s+m−1]=p.
Если строка p встречается в строке t, то p является подстрокой t.*/

export const nativeMatch = (string, subString) => {
  let matchIndex = -1;

  for (let i = 0; i < string.length; i++) {
    let j = 0;
    while (j < subString.length && string[i + j] === subString[j]) {
      j++;
      if (j === subString.length) matchIndex = i;
    }
  }
  return matchIndex;
};
