export default function createEmployeesObject(departmentName, employees) {
  const objt = {};
  objt[departmentName] = [...employees];
  return objt;
}
