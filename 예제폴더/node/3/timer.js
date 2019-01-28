const timeout = setTimeout(() => {
  console.log('1.5초');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행않됨');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다.');
})

clearImmediate(immediate2);