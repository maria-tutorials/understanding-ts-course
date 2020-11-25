const morehobbies = ['Sports', 'Cooking'];

const [hobby0] = morehobbies;
const [hobby1, hobby2, ...remainingHobbies] = morehobbies;

console.log(hobbies, hobby1, hobby2);

const user = {
    firstName: 'Max',
    idade: 30
};

const { firstName: userName, idade } = user;

console.log(userName, idade, user);