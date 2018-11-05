// var foo = {
//   name: 'Jang',
//   age: 27
// };

// console.log(foo.toString());
// console.dir(foo);

// var colorArr = ['orange', 'red', 'yellow', 'green'];
// console.log(colorArr[0]);
// console.log(colorArr[1]);


// var empty = [];
// console.log(empty);

// empty[0] = 100;
// empty[3] = 'four';
// console.log(empty);
// console.log(empty.length);

// var arr = ['zero', 'one', 'two'];
// console.log(arr.length);
// arr[3] = 'red';
// console.log(arr.length);

// for (var i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// var arr = ['zero', 'one', 'two', 'three'];

// arr.splice(2,1);
// console.log(arr);
// console.log(arr.length);

// var foo = new Array(3);
// console.log(foo);
// console.log(foo.length);

// var bar = new Array(1,2,3);
// console.log(bar);
// console.log(bar.length);

// var arr = ['bar'];
// var obj = { name: 'Jang', length : 1};

// arr.push('baz');
// console.log(arr);

// Array.prototype.push.apply(obj, ['baz']);
// console.log(obj);

// prototype chain

// var myObj = {
//   name: 'Jang',
//   sayName: function() {
//     console.log('My name is ' + this.name);
//   }
// };

// myObj.sayName();
// console.log(myObj.hasOwnProperty('name'));
// console.log(myObj.hasOwnProperty('nickName'));
// myObj.sayNickname();


// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// var foo = new Person('Jang', 27, 'Soccer');
// console.log(foo.hasOwnProperty('name'));
// console.dir(Person.prototype);

// String.prototype.testMethod = function() {
//   console.log('Testing method in String.prototype.testMethod()');
// };

// var str = "this is test";
// str.testMethod();

// console.dir(String.prototype);


// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype.constructor);

// var foo = new Person('Jang');
// console.log(foo.country);

// Person.prototype = {
//   country: 'Republic of Korea',
// };
// console.log(Person.prototype.constructor);

// var bar = new Person('Lee');
// console.log(foo.country);
// console.log(bar.country);
// console.log(foo.constructor);
// console.log(bar.constructor);


function Person(name) {
  this.name = name;
}

Person.prototype.country = 'Republic of Korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);