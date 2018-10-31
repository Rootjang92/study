// var f1 = function(input) {
//   var result;
//   result = 1;
//   return result;
// }

// var f2 = function(input) {
//   var result;
//   result = 2;
//   return result;
// }

// var f3 = function(input) {
//   var result;
//   result = 3;
//   return result;
// }

// var get_encrypted = function(func) {
//   var str = 'Jang';

//   return function() {
//     return func.call(null, str);
//   }
// }

// var encrypted_value = get_encrypted(f1)();
// console.log(encrypted_value);
// var encrypted_value = get_encrypted(f2)();
// console.log(encrypted_value);
// var encrypted_value = get_encrypted(f3)();
// console.log(encrypted_value);


// function sum(arr) {
//   var len = arr.length;
//   var i = 0, sum = 0;

//   for (; i < len ; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// var arr = [1,2,3,4];
// console.log(sum(arr)); // 10


// function multiply(arr) {
//   var len = arr.length;
//   var i = 0, result = 1;

//   for(; i < len; i++) {
//     result *= arr[i];
//   }

//   return result;
// }

// var arr = [1,2,3,4];
// console.log(multiply(arr)); // 24


// function reduce(func, arr, memo) {
//   var len = arr.length,
//   i = 0;
//   accum = memo;

//   for(; i < len; i++) {
//     accum = func(accum, arr[i]);
//   }

//   return accum;
// }


// var arr = [1,2,3,4];

// var sum = function(x, y) {
//   return x+y;
// };

// var multyply = function(x, y) {
//   return x*y;
// };

// console.log(reduce(sum, arr, 0)); // 10
// console.log(reduce(multyply, arr, 1)); // 24


// function fact(num) {
//   if (num === 0 ) return 1;
//   else return num * fact(num-1);
// }

// console.log(fact(10)); // 3628800


// var factorial = function() {
//   var cache = {'0' : 1};
//   var func = function(n) {
//     var result = 0;

//     if(typeof(cache[n]) === 'number') {
//       result = cache[n];
//     } else {
//       result = cache[n] = n * func(n-1);
//     }

//     return result;
//   }

//   return func;
// }();

// console.log(factorial(1)); // 1
// console.log(factorial(10)); // 3628800
// console.log(factorial(20)); // 2432902008176650000


// var fibo = function() {
//   var cache = {'0' : 0, '1' : 1};
//   var func = function(n) {
//     if (typeof(cache[n]) === 'number') {
//       result = cache[n];
//     } else {
//       result = cache[n] = func(n-1) + func(n-2);
//     }

//     return result;
//   }

//   return func;
// }();

// console.log(fibo(10)); // 55


// currying

// function calc(a,b,c) {
//   return a*b+c;
// }

// function curry(func) {
//   var args = Array.prototype.slice.call(arguments, 1); // 인수값과 함께 함수 호출

//   return function() {
//     return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
//   }
// }

// var new_func1 = curry(calc, 1);
// console.log(new_func1(2,3)); // 5, 1*2+3
// var new_func2 = curry(calc, 1, 3);
// console.log(new_func2(3)); // 6, 1 * 3 + 3

// function calc(a, b, c) {
//   return a*b+c;
// }

// function curry2(func) {
//   var args = Array.prototype.slice.call(arguments, 1);

//   return function() {
//     var arg_index = 0;
//     for (var i = 0; i < args.length && arg_index < arguments.length; i++)
//       if (args[i] === undefined ) args[i] = arguments[arg_index++];
//     return func.apply(null, args);
//   }
// }

// var new_func = curry2(calc, 1, undefined, 4);
// console.log(new_func(3)); // 7  1 * 3 + 4
// var new_func2 = curry2(calc, 1, 3, undefined);
// console.log(new_func2(5));


// var print_all = function(arg) {
//   for(var i in this ) console.log(i + " : " + this[i]);
//   for(var i in arguments ) console.log(i + " : " + arguments[i]);
// }

// var myObj = { name : 'Jang' };
// var myfunc = print_all.bind(myObj);
// myfunc(); // name : Jang // 2

// var myfunc1 = print_all.bind(myObj, "I am Jang", "others");
// myfunc1("inside"); // 0 : I am Jang, 1 : others, 2: inside // 3
// console.log(print_all); // [Function: print_all] // 1


// var numbers = [1, 4, 9];

// var roots = numbers.map(function (item) {
//   return Math.sqrt(item);
// });

// console.log(roots); // [1,2,3]
// console.log(numbers); // [1,4,9] -> 원본 배열은 변하지 않는다.

// numbers = [1,4,9];

// roots = numbers.map(function (item) {
//   return ++item;
// });

// console.log(roots); // [2,5,10]


// function Prefix(prefix) {
//   this.prefix = prefix;
// }

// Prefix.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + x; // 2번째 인자가 없다면 this는 전역 객체
//   }, this);
// };

// var pre = new Prefix('-webkit-');
// var preArr = pre.prefixArray(['liner-gredient', 'border-radius']);
// console.log(preArr); // [ '-webkit-liner-gredient', '-webkit-border-radius' ]


// foreach

// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }

// Counter.prototype.add = function (array) {
//   array.forEach(function (entry) {
//     this.sum += entry;
//     this.count++;
//   }, this);
// };

// var counter = new Counter();
// counter.add([2,5,9]);
// console.log(counter.count); // 3
// console.log(counter.sum); // 16


// filter

// var result = [1,2,3,4,5].filter(function (item, index, array) {
//   console.log('[' + index + '] = ' + item);
//   return item % 2;
// });

// console.log(result);  // [0] = 1
//                       // [1] = 2
//                       // [2] = 3
//                       // [3] = 4
//                       // [4] = 5
//                       // [ 1, 3, 5 ]


// reduce

var result = [1,2,3,4,5].reduce(function (previouValue, currentValue, currentIndex, array) {
  console.log(previouValue + '+' + currentValue + '=' + (previouValue + currentValue));
  return previouValue + currentValue;
});

console.log(result);

// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15
