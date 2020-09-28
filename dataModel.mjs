// An employee list with name, job position, and administrative role - "editor", "admin", "no rights"
export const jobPositions = ['web developer', 'copy writer', 'marketer'];
export const administrativeRoles = ['unprivileged', 'editor', 'admin'];

/*

This is an exercise to get us ready for things like TypeScript.

Example of a TypeScript Employee type:

enum jobPositions {
  'web developer',
  'copy writer',
  'marketer'
};

enum administrativeRole {
  'unprivileged',
  'editor',
  'admin'
};

type Employee = {
  id: string;
  name: string;
  jobPosition: jobPositions;
  administrativeRoles: administrativeRole;
};

*/

export const employee1 = {
  id: 'f398hf93-2r38u2983ur', // string
  name: 'Karl Horky', // string
  jobPosition: jobPositions[0], // string from jobPositions
  administrativeRole: administrativeRoles[0], // string from administrativeRoles
};

export const employee2 = {
  id: 'wpeo484-fe93f9k49ggr', // string
  name: 'Jan Prichystal', // string
  jobPosition: jobPositions[2], // string from jobPositions
  administrativeRole: administrativeRoles[1], // string from administrativeRoles
};

export const employeeList = [employee1, employee2];
