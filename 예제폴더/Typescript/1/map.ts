let map = new Map();

map.set("myName", "장근호");
map.set("myAddress", "인천");
map.set("myAge", 26);

for(let [key, value] of map) {
  console.log(`${key}의 값은 ${value}입니다.`);
}

for(let [key] of map) {
  console.log(`${key}`);
}

for(let [,value] of map) {
  console.log(`${value}`)
}