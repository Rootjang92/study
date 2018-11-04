function* foo(n) {
  const x = yield n;
  const y = yield (x+1);
  const z = yield (y+2);
  return x + y + z;
}

const iterator = foo(1);
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next(10)); // { value: 11, done: false }
console.log(iterator.next(20)); // { value: 22, done: false }
console.log(iterator.next(30)); // { value: 60, done: true }
console.log(iterator.next(40)); // { value: undefined, done: true }