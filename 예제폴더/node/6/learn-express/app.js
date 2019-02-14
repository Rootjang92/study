var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // express 패키지 호출하여 app 변수 객체 생성, 이 변수에 각종 기능 연결.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// 익스프레스 앱 설정

app.use(function(req, res, next) {
  console.log(req.url, '저도 미들웨어 입니다.');
  next();
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false, // 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할 지 설정.
  saveUninitialized: false, // 세션에 저장할 내역이 없어도 저장할 지 설정.
  secret: 'secret code', // 비밀 키
  cookie: {
    httpOnly: true, // 클라이언트에서 쿠기를 확인하지 못하게
    secure: false, // false로 지정하면 https가 아니여도 사용가능.
  },
}));
app.use(flash());
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// use 부분은 미들웨어 연결

module.exports = app;
