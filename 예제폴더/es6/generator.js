function* genFunc() {
  console.log('start');
  yield 1;
  console.log('restart');
  yield 2;
  console.log('exit');
}

const generator = genFunc();
console.log(generator.next());
// start
// { value: 1, done: false }

console.log(generator.next());
//restart
// { value: 2, done: false }

console.log(generator.next());
//exit
// { value: undefined, done: true }