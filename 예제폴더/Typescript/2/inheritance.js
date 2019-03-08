class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // 상위 클래스 method
    // 입력 인자가 있으면 사용하고 없으면 기본값
    printInfo(input = 'Initial') {
        console.log(input);
        console.log(`${this.title}의 저자는 ${this.author}입니다.`);
    }
}
class EBook extends Book {
    constructor(title, author, type) {
        super(title, author);
        this.type = type;
    }
    // method overriding
    printInfo() {
        super.printInfo();
        console.log(`제목: ${this.title}, 저자: ${this.author}, 타입: ${this.type}`);
    }
}
let book = new EBook('연금술사', '파울로 코엘료', 'PDF');
book.printInfo();
