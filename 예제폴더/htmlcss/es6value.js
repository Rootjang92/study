// let foo = 123;
// {
//   let foo = 456;
//   let bar = 456;
// }
// console.log(foo); // 123
// console.log(bar); // ReferenceError: bar is not defined


// let foo = 1;
// {
//   console.log(foo); // ReferenceError
//   let foo = 2;
// }

// var func = [];

// for (var i = 0; i < 3; i++) {
//  (function (index) {
//    func.push(function () { console.log(index); })
//  }(i));
// }

// for (var j = 0; j < 3; j++) {
//   func[j](); // 0 1 2
// }


// var func = [];

// for(let i = 0; i < 3; i++) {
//   func.push(function () { console.log(i); });
// }

// for(let j = 0; j < 3; j++) {
//   console.dir(func[j]);
//   func[j]();
// }

// // [Function]
// 0
// [Function]
// 1
// [Function]
// 2


if (rows > 10) {} // ???

const MAXROWS = 10;
if (rows > MAXROWS) {}