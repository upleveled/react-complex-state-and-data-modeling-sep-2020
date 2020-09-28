import { employeeList, administrativeRoles } from './dataModel.mjs';

// Describe a change of Karl to an 'editor' administrative role
// Option #1: copying the array with the spread operator and making a change
const newEmployeeList1 = [...employeeList];
newEmployeeList1[0].administrativeRole = administrativeRoles[1];

// Option#1.1: copying the array with slice method and making a change
const newEmployeeList2 = employeeList.slice();
newEmployeeList2[0].administrativeRole = administrativeRoles[1];

// Problem with copying array with objects:
// Original objects have been modified!! 💥
console.log(employeeList);

// Option #2: Change the data directly
employeeList[0].administrativeRole = administrativeRoles[1];
