type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

/* error:
const result = add(5, 5);
result.split(' ');
*/

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData.job && fetchedUserData.job.title);

console.log(fetchedUserData?.job?.title); //optional chaining

const userInput = undefined;

// const storedData = userInput || 'DEFAULT'; //issues for ''
const storedData = userInput ?? 'DEFAULT'; //nullish coalescing

console.log(storedData);
