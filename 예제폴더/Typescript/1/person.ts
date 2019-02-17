export class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return 'hello, ' + this.name;
  }
}


const person = new Person('Jang');
console.log(person.sayHello());