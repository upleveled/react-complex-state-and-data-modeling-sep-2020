import React, { useState } from 'react';
import './App.css';

// An employee list with name, job position, and administrative role - "editor", "admin", "no rights"

const jobPositions = ['web developer', 'copy writer', 'marketer'];
const administrativeRoles = ['unprivileged', 'editor', 'admin'];

const employee1 = {
  id: 'f398hf93-2r38u2983ur', // string
  name: 'Karl Horky', // string
  jobPosition: jobPositions[0], // string from jobPositions
  administrativeRole: administrativeRoles[0], // string from administrativeRoles
};

const employee2 = {
  id: 'wpeo484-fe93f9k49ggr', // string
  name: 'Jan Prichystal', // string
  jobPosition: jobPositions[2], // string from jobPositions
  administrativeRole: administrativeRoles[1], // string from administrativeRoles
};

export default function App() {
  const [employeeList, setEmployeeList] = useState([employee1, employee2]);
  return (
    <div className="App">
      <ul>
        {employeeList.map((employee) => {
          return (
            <li key={employee.id}>
              {employee.name}, {employee.administrativeRole}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => {
          // Create a copy and mutate the new array
          // const newEmployeeList1 = [...employeeList];
          // newEmployeeList1[0].administrativeRole = administrativeRoles[1];
          // console.log(employeeList);
          // setEmployeeList(newEmployeeList1);

          // Create a new array with the contents of the
          // existing array (using the spread operator),
          // and map over it to update the internals
          setEmployeeList([
            ...employeeList.map((employee) => {
              if (employee.id === 'f398hf93-2r38u2983ur') {
                // ...change the administrativeRole property
                employee.administrativeRole = 'editor';

                // ...or, create a copy of the employee and modify the
                // administrativeRole property
                // employee = {
                //   ...employee,
                //   administrativeRole: "editor"
                // };
              }

              return employee;
            }),
          ]);
        }}
      >
        Change Karl to editor
      </button>
    </div>
  );
}
