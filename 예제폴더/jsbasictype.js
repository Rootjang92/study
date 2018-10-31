// typeof 연산자를 사용한 기본 타입

// var intNum = 10;
// var floatNum = 0.1;

// var singleQuoteStr = 'single quote string';

// var boolVar = true;

// var emptyVar;

// var nullVar = null;

// console.log(typeof intNum, typeof floatNum, typeof singleQuoteStr, typeof boolVar,
//             typeof emptyVar, typeof nullVar);



// var num = 5 / 2;

// console.log(num);
// console.log(Math.floor(num));

// var str = 'easy';
// console.log(str[0], str[1], str[2], str[3]);

// str[0] = 'E';
// console.log(str);

// var nullVar = null;

// console.log(typeof nullVar === null);
// console.log(nullVar === null);


// 객체 생성

// var foo = new Object();

// // foo property make up
// foo.name = 'Jang';
// foo.age = 27;
// foo.gender = 'male';

// console.log(typeof foo);
// console.log(foo);

// var foo = {
//   name : 'Jang',
//   age : 27,
//   gender : 'male'
// };

// console.log(typeof foo);
// console.log(foo);


// var foo = {
//   name : 'Jang',
//   major : 'Computer science'
// };

// 객체 프로퍼티 읽기
// console.log(foo.name);
// console.log(foo['name']);
// console.log(foo.nickname);

// foo.major = 'electronics Business';
// console.log(foo.major);
// console.log(foo['major']);

// foo.age = 27;
// console.log(foo.age);

// foo['full-name'] = 'Jang Geun-ho';
// console.log(foo['full-name']);
// console.log(foo.full);

// var foo = {
//   name : 'Jang',
//   major : 'Computer science'
// };

// var prop;
// for (prop in foo) {
//   console.log(prop, foo[prop]);
// }

// var A = {
//   val : 40
// };
// var B = A

// console.log(A.val);
// console.log(B.val);

// B.val = 50;
// console.log(A.val);
// console.log(B.val);

// var a = 100;
// var b = 100;

// var objA = { value: 100 };
// var objB = { value: 100 };
// var objC = objB

// console.log(a == b);
// console.log(objA == objB);
// console.log(objB == objC);

var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log(num);
  console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);