let myArr: string[] = ["Hello", "world"];

let [first, second] = myArr;

console.log(first);
console.log(second);

[second, first] = [first, second]; // swap

console.log(first);
console.log(second);


// 함수의 파라미터 전달 시

function myFunc([x,y]: [number, number]) : void {
  console.log (`x의 값은 ${x}`);
  console.log(`y의 값은 ${y}`);
}

myFunc([10, 20]);


// spread

let yourArr: number[] = [1,2,3,4];

let [one, ...others] = yourArr;

console.log(one);
console.log(others);


// Destructuring Array

let myArr2: number[] = [1,2,3,4];

let [first2] = myArr2;

let [,second2, ,fourth] = myArr2;

console.log(first2);
console.log(second2);
console.log(fourth);