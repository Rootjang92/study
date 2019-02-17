var _a;
var myArr = ["Hello", "world"];
var first = myArr[0], second = myArr[1];
console.log(first);
console.log(second);
_a = [first, second], second = _a[0], first = _a[1]; // swap
console.log(first);
console.log(second);
// 함수의 파라미터 전달 시
function myFunc(_a) {
    var x = _a[0], y = _a[1];
    console.log("x\uC758 \uAC12\uC740 " + x);
    console.log("y\uC758 \uAC12\uC740 " + y);
}
myFunc([10, 20]);
// spread
var yourArr = [1, 2, 3, 4];
var one = myArr[0], others = myArr.slice(1);
console.log(one);
console.log(others);
// Destructuring Array
var myArr2 = [1, 2, 3, 4];
var first2 = myArr2[0];
var second2 = myArr2[1], fourth = myArr2[3];
console.log(first2);
console.log(second2);
console.log(fourth);
