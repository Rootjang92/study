export class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return 'hello, ' + this.name;
    }
}
const person = new Person('Jang');
console.log(person.sayHello());
