let obj = {
  key1 : 'Hello world',
  key2 : 100,
  key3 : 'Hello TypeScript'
};

let { key1: a, key2: b} = obj;

console.log(a);
console.log(b);


/*

let { a, b } = { a: "Hello World", b: 100 };

console.log(a);    // Hello World 출력
console.log(b);    // 100 출력

*/


// spread operator

let obj2 = {
  myName: "홍길동",
  myAddress: "서울",
  myAge: 30
};

let { myName, ...otherInfo} = obj2;

console.log(`이름은 : ${myName}`);
console.log(`나이는 : ${otherInfo.myAge}`);


// 객체 프로퍼티 이름 변경

let obj3 = {
  a: "홍길동",
  b: "서울",
  c: 30
};

let { a:myName2, b:myAddress } = obj3; // 여기서의 콜론은 타입 설정이 아니다.

console.log(`이름은 : ${myName2}`);     // 홍길동 출력
console.log(`주소는 : ${myAddress}`);  // 서울 출력


// default 값 설정하기

let obj4: {myName:string, myAge?:number} = {
  myName : "홍길동",
};

// ?는 해당 프로퍼티가 있을 수도 없을 수도 있다는 의미. 필수요소가 아니라는 뜻.


let { myName:uNmae, myAge:uAge = 30 } = obj4;

console.log(uNmae);  // 홍길동
console.log(uAge);   // 30