class Book {
  title: string;
  author: string;

  constructor(title:string, author:string) {
    this.title = title;
    this.author = author;
  }

  printInfo(): void {
    console.log(`${this.title}의 작가는 ${this.author}입니다.`);
  }
}

let book:Book = new Book('연금술사', '파울로 코엘료');
book.printInfo();