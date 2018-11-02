// Object.create

var Parent = (function() {
  function Parent(name) {
    this.name = name;
  };

  Parent.prototype.sayHi = function() {
    console.log('Hi! ' + this.name);
  };

  return Parent;
}());

var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi(); // Hi! child
console.log(child instanceof Parent); // true


var parent = {
  name: 'parent',
  sayHello: function() {
    console.log('Hello! ' + this.name)
  }
};

var child2 = Object.create(parent);
child2.name = 'Jang';

parent.sayHello(); // Hello! parent
child2.sayHello(); // Hello! Jang
console.log(parent.isPrototypeOf(child2)); // true


// Object.create 함수의 폴리필
// if (!Object.create) {
//   Object.create = function (o) {
//     function F() {}  // 1
//     F.prototype = o; // 2
//     return new F();  // 3
//   };
// }
