// const pow = x => x * x;
// console.log(pow(10));

// callback function

// const arr = [1,2,3];
// const pos = arr.map(x => x*x);
// console.log(pos);

// function Prefixer(prefix) {
//   this.prefix = prefix;
//   console.log(this); // Prefixer { prefix: 'hi' }
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + ' ' + x; // this = window -> 생성자 함수와 객체 메소드를 제외한 모든 함수 내부의 this는 전역 객체를 가리킨다.
//   })
// };

// var pre = new Prefixer('hi');
// console.log(pre.prefixArray(['Lee','Kim'])); // undefined Lee, undefined Kim



// 1. this => that

// function Prefixer(prefix) {
//   this.prefix = prefix;
//   console.log(this); // Prefixer { prefix: 'hi' }
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   var that = this; // this = prefix (생성자 함수의 인스턴스)
//   return arr.map(function(x) {
//     return that.prefix + ' ' + x;
//   });
// };

// var pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee'])); // Hi Lee


// 2. map(func, this)

// function Prefixer(prefix) {
//   this.prefix = prefix;
//   console.log(this); // Prefixer { prefix: 'hi' }
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function(x) {
//     return this.prefix + ' ' + x;
//   },this); // this = prefix
// };

// var pre = new Prefixer('Hello');
// console.log(pre.prefixArray(['Kim'])); // Hello kim


// 3. bind(this)


// function Prefixer(prefix) {
//   this.prefix = prefix;
//   console.log(this); // Prefixer { prefix: 'hi' }
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function(x) {
//     return this.prefix + ' ' + x;
//   }.bind(this)); // this = prefix
//   // bind는 this 키워드를 제공된 값으로 설정하고 새로운 함수가 호출될 때 제공되는 주어진 순서의 선행 인수가 있는 새로운 함수를 생성합니다.
// };

// var pre = new Prefixer('Bye');
// console.log(pre.prefixArray(['Jang'])); // Bye Jang


// Lexical this

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(x => `${this.prefix} ${x}`)
}

const pre = new Prefixer('Nice to meet you');
console.log(pre.prefixArray(['Park'])); // Nice to meet you Park



