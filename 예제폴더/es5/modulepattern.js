var Person = function() {
  // var name = arg ? arg : '';
  var name;
  var F = function(arg) { name = arg ? arg : ''};
  F.prototype =  {
    getName: function() {
      return name;
    },
    setName: function(arg) {
      name = arg;
    }
  };
  return F;
}();

var me = new Person('Lee');
console.log(Person.prototype === me.__proto__); // true
console.log(me.getName()); // Lee
me.setName('kim');
console.log(me.getName()); // Kim

// var name = me.getName();

// console.log(name); // Lee

// me.setName('Kim');
// name = me.getName();

// console.log(name); // Lee

// console.log(person.prototype === me.__proto__) // false
// console.log(me.__proto__ === Object.prototype) // true


// person 함수는 객체를 반환한다. 이 객체 내의 메소드 getName, setName은 클로저로서 private 변수 name에 접근할 수 있다.
// private 멤버가 객체나 배열일 경우, 반환된 해당 멤버의 변경이 가능하다.
// 객체 반환 시, shallow copy로 private 멤버의 참조값을 반환하게 된다. 따라서 외부에서도 private 값을 변경할 수 있다.
// 그래서 객체 반환 시 객체를 그대로 반환하지 않고 반환해야 할 객체의 정보를 새로운 객체에 담아 반환해야 한다.
// 여기서 person 함수가 반환된 객체는 person 함수 객체의 프로토타입에 접근할 수 없다.