export default function getStudentsByLocation(arr, city) {
  const newArray = arr.filter((element) => element.location === city);
  return newArray;
}
