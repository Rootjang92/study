// function Person(name) {
//   this.name = name;

//   Person.prototype.setName = function (name) {
//     this.name = name;
//   }

//   Person.prototype.getName = function () {
//     return this.name;
//   }
// };

// var me = new Person('Jang');
// var you = new Person('Lee');
// var him = new Person('Park');

// console.log(Person.prototype);

// console.log(me);
// console.log(you);
// console.log(him);


// var Parent = (function () {
//   function Parent (name) {
//     this.name = name;
//   }

//   Parent.prototype.sayHi = function () {
//     console.log('Hi! ' + this.name);
//   };

//   return Parent;
// }());

// var Child = (function () {
//   function Child(name) {
//     this.name = name;
//   }

//   // 자식 생성자 함수의 프로토타입 객체를 부모의 인스턴스로 변경
//   Child.prototype = new Parent();

//   Child.prototype.sayHi = function() {
//     console.log('안녕하세요! ' + this.name);
//   };

//   Child.prototype.sayBye = function() {
//     console.log('안녕히가세요! ' + this.name);
//   };

//   return Child;
// }());

// var child = new Child('Jang');
// console.log(child);

// console.log(Child.prototype);

// child.sayHi();
// child.sayBye();

// console.log(child instanceof Parent);
// console.log(child instanceof Child);

// 프로토타입 상속

// var Parent = (function () {
//   function Parent(name) {
//     this.name = name;
//   }

//   Parent.prototype.sayHi = function() {
//     console.log('Hi ' + this.name);
//   };

//   return Parent;
// }());

// var child = Object.create(Parent.prototype);
// child.name = 'Jang';

// child.sayHi();

// console.log(child instanceof Parent);


// 객체리터럴 프로토타입 상속

// var parent = {
//   name: 'Jang',
//   sayHi: function() {
//     console.log('Hi ' + this.name);
//   }
// };

// var child = Object.create(parent);
// child.name = 'kim';

// parent.sayHi();
// child.sayHi();

// console.log(parent.isPrototypeOf(child));


// 캡슐화

// var person = function(arg) {
//   var name = arg ? arg : ''; // 삼항 연산자


//   return { getName: function() {
//       return name;
//     },
//     setName: function(arg) {
//       name = arg;
//     }
//   }
// };

// var me = person('Jang');

// var name = me.getName();
// console.log(name); // Jang

// me.setName('kim');
// name = me.getName();
// console.log(name); // kim


// 함수 반환 에제

var Person = function() {
  var name;

  var F = function(arg) { name = arg ? arg : ''; };

  F.prototype = {
    getName: function() {
      return name;
    },
    setName: function(arg) {
      name = arg;
    }
  };

  return F;
}();

var me = new Person('Jang');

console.log(Person.prototype === me.__proto__); // true

console.log(me.getName()); // Jang
me.setName('kim');
console.log(me.getName()); // kim