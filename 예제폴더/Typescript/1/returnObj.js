function myFunc() {
    var obj = {
        result1: "",
        result2: 0
    };
    obj.result1 = 'first';
    obj.result2 = 100;
    return obj;
}
var _a = myFunc(), first = _a.result1, second = _a.result2;
console.log(first);
console.log(second);
