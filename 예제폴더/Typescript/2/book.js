class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  printInfo() {
    console.log(`${this.title}의 작가는 ${this.author}입니다.`)
  }
}

let book = new Book('연금술사', '파울로 코엘료');
book.printInfo(); // 연금술사의 작가는 파울로 코엘료입니다.