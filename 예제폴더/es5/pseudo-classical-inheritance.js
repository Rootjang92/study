// Parent

var Parent = (function() {
  function Parent(name) {
    this.name = name;
  }

  Parent.prototype.sayHi = function() {
    console.log('Hi!' + this.name);
  };

  return Parent;
}());

var Child = (function () {
  function Child(name) {
    this.name = name;
  }
  Child.prototype = new Parent(); // 2

  Child.prototype.sayHi = function() {
    console.log('Hello!' + this.name);
  }

  Child.prototype.sayBye = function() {
    console.log('Bye' + this.name);
  };

  return Child;
}());

var child = new Child('child'); // 1
console.log(child); // Parent { name: 'child' }
console.log(Child.prototype); // Parent { name: undefined, sayHi: [Function], sayBye: [Function] }
child.sayHi(); // Hello!child
child.sayBye(); // Byechild
console.log(child instanceof Parent); // true
console.log(child instanceof Child); // true
console.log(child.constructor); // [Function: Parent]
// Child 생성자 함수가 생성한 인스턴스 child(①)의 프로토타입 객체는 Parent 생성자 함수가 생성한 인스턴스(②)이다.
// 그리고 Parent 생성자 함수가 생성한 인스턴스의 프로토타입 객체는 Parent.prototype이다.