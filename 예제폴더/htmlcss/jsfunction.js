
// function multiply(x,y) {
//   return x * y;
// }

// console.log(multiply(3,4));

// var mul = function (x,y) {
//   return x * y;
// }

// console.log(mul(3,4));

// var factorial = function factorial(n) {
//   if ( n <= 1) { return 1; }
//   return n * factorial(n-1);
// }

// console.log(factorial(3));
// console.log(factorial(1));

// var add = new Function('x', 'y', 'return x + y');
// console.log(add(3,4));

// var res = square(5);

// function square(number) {
//   return number * number;
// }

// var res = square(5);

// var square = function(number) {
//   return number * number;
// }

// var foo = 100;
//     var bar = function() { return 100; };
//     console.log(bar());

//     var obj = {};
//     obj.baz = function () { return 200; };
//     console.log(obj.baz());

// var foo = function(func) {
//   func();
// };

// foo(function() {
//   console.log('kkk');
// });

// var a = function() {
//   return function() {
//     console.log('apple')
//   };
// };

// var b = a();
// b();

// (function (name) {
//   console.log('welcome -> ' + name);
// })('Jang');


// function parent() {
//   var a = 100;
//   var b = 200;

//   function child() {
//     var b = 300;

//     console.log(a);
//     console.log(b);
//   }
//   child();
// }
// parent();
// child();

// function sum() {
//   var res = 0;

//   for(var i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }
//   return res;
// }

// console.log(sum(1));
// console.log(sum(1,2,3,4,5,6,7,8,9));

// var myObj = {
//   name: 'Jang',
//   sayName: function() {
//     console.log(this.name);
//   }
// };

// var Obj = {
//   name: 'Geun'
// };

// Obj.sayName = myObj.sayName;

// myObj.sayName();
// Obj.sayName();


// var ga = 'Global variable';

// console.log(ga);
// console.log(window.ga);

// function foo() {
//   console.log('invoked!');
// }
// window.foo();


// var num = 100;

// var myObj = {
//   num: 1,
//   func1: function() {
//     this.num += 1;
//     console.log('func1() called. this.num : ' + this.num);

//     // func2
//     func2 = function() {
//       this.num += 1;
//       console.log('func2() called. this.num : ' + this.num);
//     }
//     func2();
//   }
// };
// myObj.func1();

// var Person = function (name) {
//   this.name = name;
// };

// var foo = new Person('Jang');
// console.log(foo.name);

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var foo = {};

// Person.apply(foo,['Jang', 27, 'man']);
// console.dir(foo);

function myFunction() {
  console.dir(arguments);

  // arguments.shift(); -> error

  var arg = Array.prototype.slice.apply(arguments);
  console.dir(arg);
}

myFunction(1,2,3);