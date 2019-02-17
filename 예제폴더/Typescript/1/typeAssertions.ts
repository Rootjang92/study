let myVar: any = "Hello World";

let myVarCount: number = (<string>myVar).length;

myVarCount = (myVar as string).length;

console.log((<number>myVar).toFixed());  // runtime error