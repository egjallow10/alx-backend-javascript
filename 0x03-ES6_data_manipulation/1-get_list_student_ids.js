export default function getListStudentIds(params) {
  if (!Array.isArray(params)) {
    return [];
  }
  const newArray = params.map((element) => element.id);
  return newArray;
}
