var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var obj = {
    key1: 'Hello world',
    key2: 100,
    key3: 'Hello TypeScript'
};
var a = obj.key1, b = obj.key2;
console.log(a);
console.log(b);
/*

let { a, b } = { a: "Hello World", b: 100 };

console.log(a);    // Hello World 출력
console.log(b);    // 100 출력

*/
// spread operator
var obj2 = {
    myName: "홍길동",
    myAddress: "서울",
    myAge: 30
};
var myName = obj2.myName, otherInfo = __rest(obj2, ["myName"]);
console.log("\uC774\uB984\uC740 : " + myName);
console.log("\uB098\uC774\uB294 : " + otherInfo.myAge);
// 객체 프로퍼티 이름 변경
var obj3 = {
    a: "홍길동",
    b: "서울",
    c: 30
};
var myName2 = obj3.a, myAddress = obj3.b; // 여기서의 콜론은 타입 설정이 아니다.
console.log("\uC774\uB984\uC740 : " + myName2); // 홍길동 출력
console.log("\uC8FC\uC18C\uB294 : " + myAddress); // 서울 출력
// default 값 설정하기
var obj4 = {
    myName: "홍길동"
};
// ?는 해당 프로퍼티가 있을 수도 없을 수도 있다는 의미. 필수요소가 아니라는 뜻.
var uNmae = obj4.myName, _a = obj4.myAge, uAge = _a === void 0 ? 30 : _a;
console.log(uNmae); // 홍길동
console.log(uAge); // 30
