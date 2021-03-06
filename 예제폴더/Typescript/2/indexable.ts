interface IObj {
  [idx: string]: string;
}

let obj: IObj = {
  myName: '홍길동',
  myAddress: '서울'
};

console.log(obj.myName);           // "." operator 이용

let keys = Object.keys(obj);       // 객체의 key값들에 대한 배열 획득

for(let i = 0; i< keys.length; i++) {
  console.log(obj[keys[i]]);     // 배열형식을 이용
}