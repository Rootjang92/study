// /**
//  * 모든 생성자 함수의 프로토타입은 Function.prototype이다. 따라서 모든 생성자 함수는 Function.prototype.method()에 접근할 수 있다.
//  * @method Function.prototype.method
//  * @param ({string}) (name) - (메소드 이름)
//  * @param ({function}) (func) - (추가할 메소드 본체)
//  ** /

Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

function Person(name) {
  this.name = name;
}

Person.method('getName', function() {
  return this.name;
});

var me = new Person('Jang');
var you = new Person('Park');
var him = new Person('Joo');

console.log(Person.prototype);
console.log(me);
console.log(you);
console.log(him);

// Person { getName: [Function] }
// Person { name: 'Jang' }
// Person { name: 'Park' }
// Person { name: 'Joo' }