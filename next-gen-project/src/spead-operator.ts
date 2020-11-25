const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = { ...person };