// iterable을 이용한 fibonacci 수열 구현

const fibonacci = {
  [Symbol.iterator]() {
    let [prev, cur] = [0, 1];
    // 순회 카운터
    let step = 0;
    const maxStep = 10;
    return {
      next() { // fibonacci 객체가 순회할 때마다 next 함수 호출
        [prev, cur] = [cur, prev + cur];
        return { value: cur, done: step++ >= maxStep };
      }
    };
  }
};

for (const num of fibonacci) {
  console.log(num);
}

// Spread 연산자
const arr = [...fibonacci];
console.log(arr);

// 디스트러ㄱ처링
const [first, second, ...rest] = fibonacci;
console.log(first,second, rest);