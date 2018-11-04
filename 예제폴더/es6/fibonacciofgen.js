const fibonacci = function* (maxStep) {
  let [prev, curr] = [0, 1];

  for (let i = 0; i < maxStep; i++) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
};

for (const num of fibonacci(10)) {
  console.log(num);
}

// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89