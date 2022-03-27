export const runTime = (func) => {
  let time = performance.now();
  func();
  time = performance.now() - time;
  return `${time} мс.`;
};
