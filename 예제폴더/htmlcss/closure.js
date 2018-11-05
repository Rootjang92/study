// function outFun() {
//   var x = 1;
//   var inFun = function() {
//     console.log(x);
//   };
//   return inFun;
// };

// var inner = outFun();
// inner(); // 1


// function HelloFunc(func) {
//   this.greeting = 'Helle';
// }

// HelloFunc.prototype.call = function(func) {
//   func ? func(this.greeting) : this.func(this.greeting);
// }

// var user = function(greeting) {
//   console.log(greeting); // Hello
// }

// var objHello = new HelloFunc();
// objHello.func = user;
// objHello.call();

// function saySomething(obj, methodName, name) {
//   return (function(greeting) {
//     return obj[methodName](greeting,name);
//   });
// }

// function newObj(obj, name) {
//   obj.func = saySomething(this, "who", name);
//   return obj;
// }

// newObj.prototype.who = function(greeting, name) {
//   console.log(greeting + " " + (name || "everyone") );
// }

// var obj1 = new newObj(objHello, "Jang");
// obj1.call();
// console.log(obj1);

// var getCompleted = (function() {
//   var buffAr = [
//     'I am ',
//     '',
//     'I live in ',
//     '',
//     '. I\'m ',
//     '',
//     ' years old.',
//   ];
//   return (function(name, city, age) {
//     buffAr[1] = name;
//     buffAr[3] = city;
//     buffAr[5] = age;

//     return buffAr.join('');
//   });
// })();

// var str = getCompleted('Jang', 'Incheon', 27);
// console.log(str);


// 클로저의 프로퍼티값이 쓰기 가능하면 여러번 호출로 값이 항상 변할 수 있음.

// function outerFun(argNum) {
//   var num = argNum;
//   return function(x) {
//     num += x;
//     console.log('num : ' + num);
//   }
// }

// var exam = outerFun(40);
// exam(5);
// exam(-5);

// exam을 호출할 때마다 num의 값이 변한다.


// 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어있는 경우.

function func() {
  var x = 1;
  return {
    func1 : function(){ console.log(++x); },
    func2 : function(){ console.log(-x); }
  };
};

var exam = func();
exam.func1(); // 2
exam.func2(); // -2

// 함수 호출 때마다 값이 변하므로 주의.


// 루프 안 클로저 활용.

var arr = [];

for(var i = 0; i < 5; i++) {
  arr[i] = function() {
    return i;
  };
}

for (var j=0; j < arr.length; j++) {
  console.log(arr[j]());
} // 55555

// 이것을 만들기 위해서는


var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function() {
      return id;
    };
  }(i));
}

for (var j=0; j < arr.length; j++) {
  console.log(arr[j]());
} // 01234

