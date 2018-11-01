// function outerFunc() {
//   var x = 10;
//   var innerFunc = function () { console.log(x); };
//   return innerFunc;
// }

// /**
//  *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
//  *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
//  */
// var inner = outerFunc();
// inner(); // 10

// counting func

function makeCounter(predicate) {
  var num = 0; // free variable
  return function () {
    num = predicate(num);
    return num;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2