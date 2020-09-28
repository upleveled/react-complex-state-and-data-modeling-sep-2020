import React, { useState } from 'react';

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
  const [filter, setFilter] = useState('unfiltered');

  // Deriving State instead of extra state variable
  const visibleEmployeeList = employeeList.filter((employee) => {
    if (filter === 'editor' && employee.administrativeRole !== 'editor') {
      return false;
    }
    return true;
  });

  return (
    <div>
      <ul>
        {visibleEmployeeList.map((employee) => (
          <li key={employee.id}>
            {employee.name}, {employee.administrativeRole}
          </li>
        ))}

        {
          // This can also be done directly inside of the .map
          // function, which was the version that we started with
          //
          // employeeList.map((employee) => {
          //   if (filter === 'editor' && employee.administrativeRole !== 'editor') {
          //     return null;
          //   }
          //   return (
          //     <li key={employee.id}>
          //       {employee.name}, {employee.administrativeRole}
          //     </li>
          //   );
          // })
        }
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
      </button>{' '}
      <button
        onClick={() => {
          setEmployeeList([
            ...employeeList.map((employee) => {
              if (employee.id === 'f398hf93-2r38u2983ur') {
                employee.administrativeRole = 'unprivileged';
              }

              return employee;
            }),
          ]);
        }}
      >
        Change Karl to unprivileged
      </button>
      <br />
      <button
        onClick={() => {
          setFilter('editor');
        }}
      >
        Show only Editors
      </button>{' '}
      <button
        onClick={() => {
          setFilter('unfiltered');
        }}
      >
        Reset Filter
      </button>
    </div>
  );
}
