const http = require('http');

http.createServer((req, res) => {
  // 어떻게 응답할지 적어준다.
  res.write(`<h1>Hello Node!</h1>`);
  res.end(`<p>Hello Server!</p>`);
}).listen(8080, () => {
  console.log(`8080번 포트에서 서버 대기 중.`);
})