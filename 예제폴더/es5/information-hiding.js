var Person = function(arg) {
  var name = arg ? arg : '';
  // function-level scope에 의해서 name 변수를 외부에서 참조할 수 없다. this를 쓰면 public으로 변한다.
  this.getName = function() {
    return name;
  }

  this.setName = function() {
    name = arg;
  };
}

// public method인 getName, setName은 자유 변수 name에 접근할 수 있다.

var me = new Person('Jang');

var name = me.getName();
console.log(name); // Jang

me.setName('Kim');
name = me.getName();

console.log(name); // Jang