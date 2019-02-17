function myFunc(): string[] {
  let arr: string[] = [];
  arr[0] = "first";
  arr[1] = "second";

  return arr;
}

let [result, result2] = myFunc();

console.log(result);
console.log(result2);