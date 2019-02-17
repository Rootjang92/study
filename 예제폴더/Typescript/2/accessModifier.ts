class Book {
  protected title: string;
  // 생성자에 인자를 명시할 때 access modifier를 같이 명시하면 위의 예처럼 명시적으로 해당 property가 선언되어 사용할 수 있게 됩니다.
  public constructor(title: string, private _author: string) {
    this.title = title;
  }

  public printInfo(): void {
    console.log (`${this.title}의 저자는 ${this._author}입니다.`);
  }

  // private property getter
  get author(): string {
    return this._author;
  }

  // private property setter
  set author(value: string) {
    this._author = value;
  }
}

class EBook extends Book {
  private type: string;

  public constructor(title: string, author: string, type: string) {
    super(title, author);
    this.type = type;
  }

  public printInfo(): void {
    console.log(`제목: ${this.title}, 저자: ${this.author}, 타입: ${this.type}`);
  }
}

let book:Book = new EBook('연금술사', '파울로 코엘료', 'PDF');
book.printInfo();