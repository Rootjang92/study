function myFunc(): {result1: string, result2?:number} {
  let obj = {
    result1 : "",
    result2 : 0
  };

  obj.result1 = 'first';
  obj.result2 = 100;

  return obj;
}

let {result1: first, result2:second} = myFunc();

console.log(first);
console.log(second);