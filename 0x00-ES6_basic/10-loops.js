/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const item of array) {
    newArray.push(appendString + item);
  }

  return newArray;
}
