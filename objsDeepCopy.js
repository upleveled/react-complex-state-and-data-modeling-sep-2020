const objs = [
  {
    id: 10,
  },
];

// Copy only the array
const objs2 = [...objs];

objs2[0].id = 20;
console.log(objs[0].id); // 20 💥 oh nooo

// Copy the object deeper inside the array
const objs3 = [
  {
    ...objs[0],
  },
];
objs3[0].id = 30;
console.log(objs[0].id); // 20 🙌 the original has not been modified
