/*
Алгоритм Кнута-Морриса-Пратта.
Время работы алгоритма линейно зависит от объёма входных данных, то есть разработать асимптотически более эффективный
 алгоритм невозможно. При несовпадении символа образца и подстроки сдвигает образец на большее кол-во символео
 (наивный алгоритм при несовпадении начинает опять сначала)*/



export const algoritmKMP = (string, subString) => {

  const prefix = (s) => {
    let p = [0];
    for (let i = 1; i < s.length; i++) {
      let k = p[i - 1];
      while (k > 0 && s[k] !== s[i]) {
        k = p[k - 1];
      }
      if (s[k] === s[i]) k += 1;
      p[i] = k;
    }
    return p;
  };

  const pi = prefix(subString);
  const n = string.length;
  const m = subString.length;
  let matchIndex = -1;

  let i = 0;
  let j = 0;

  // TODO: fix, not work
  while ((i + n - j) <= n) {
    while ((subString[j] === string[i]) && j <= m) {
      i++;
      j++;
    }
    if (j === (m + 1)) {
      matchIndex = i - m;
    }
    if(j === 1) {
      i++;
    }
    j = pi[j];
  }

  return matchIndex;
};
