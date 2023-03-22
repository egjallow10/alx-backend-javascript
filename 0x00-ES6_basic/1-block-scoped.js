export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-var
  var task = false;
  // eslint-disable-next-line no-var
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
