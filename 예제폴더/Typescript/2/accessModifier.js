class Book {
    // 생성자에 인자를 명시할 때 access modifier를 같이 명시하면 위의 예처럼 명시적으로 해당 property가 선언되어 사용할 수 있게 됩니다.
    constructor(title, _author) {
        this._author = _author;
        this.title = title;
    }
    printInfo() {
        console.log(`${this.title}의 저자는 ${this._author}입니다.`);
    }
    // private property getter
    get author() {
        return this._author;
    }
    // private property setter
    set author(value) {
        this._author = value;
    }
}
class EBook extends Book {
    constructor(title, author, type) {
        super(title, author);
        this.type = type;
    }
    printInfo() {
        console.log(`제목: ${this.title}, 저자: ${this.author}, 타입: ${this.type}`);
    }
}
let book = new EBook('연금술사', '파울로 코엘료', 'PDF');
book.printInfo();
