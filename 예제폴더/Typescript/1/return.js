function myFunc() {
    var arr = [];
    arr[0] = "first";
    arr[1] = "second";
    return arr;
}
var _a = myFunc(), result = _a[0], result2 = _a[1];
console.log(result);
console.log(result2);
