interface Named {
    readonly name?: string;
    outputName?: string;
  }

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user0: Person;

user0 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user0.greet('Hi there - I am');

let user1: Greetable;
user1 = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1);

let user2: Greetable;
user2 = new Person();
user2.greet('Hi there - I am');
console.log(user2);
