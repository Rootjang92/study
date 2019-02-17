let isDone: boolean = false;

let myVar: boolean = false;
let myBooleanVar: Boolean = new Boolean(true);

console.log(myVar.valueOf());
console.log(myBooleanVar.valueOf());

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(octal.valueOf());

// string
let myStr: string = 'Hello';
let myNumber: number = 100;

let myTemplateString = `this is a sample Text => ${ myNumber + 100}, myStr : ${ myStr }`;

console.log(myTemplateString);




