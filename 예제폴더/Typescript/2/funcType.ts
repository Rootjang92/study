interface myInterface {
  (myName: string, myAge: number): void;
}

let myFunc: myInterface = function(myName:string, myAge:number): void {
  console.log(`이름 : ${myName}, 나이 : ${myAge}`);
};

myFunc("홍길동",30);
