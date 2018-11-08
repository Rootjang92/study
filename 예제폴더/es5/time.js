(function printNow() {
  var today = new Date();

  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  var day = dayNames[today.getDay()];

  var year = today.getFullYear();
  var month = today.getMonth() + 1; // 0 ~ 11로 이루어져 있기 때문에 +1
  var date = today.getDate();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제
  hour = hour % 12;
  hour = hour ? hour : 12;

  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var now = year + '년 ' + month + '월 ' + date + '일 ' + hour + '시 ' + minute + '분 ' + second + '초 ' + ampm;

  console.log(now);
  setTimeout(printNow, 1000);
}());