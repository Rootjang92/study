interface IPerson {
  [idx: string]: string | number | Function;
  myName: string;
  myAddress: string;
  myAge: number;

  printInfo(obj:IPerson): void;
}

class Person implements IPerson {
  [index: string]: string | number | Function;
  myName: string;
  myAddress: string;
  myAge: number;

  constructor(name:string, address:string, age:number) {
      this.myName = name;
      this.myAddress = address;
      this.myAge = age;
  }

  printInfo(obj: IPerson): void {
      Object.keys(obj).forEach(t => console.log(obj[t]));
  }
}

const obj = new Person("홍길동", "서울", 30);
obj.printInfo(obj);