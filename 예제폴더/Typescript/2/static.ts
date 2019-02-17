class Book {

  public title:string;
  static count: number;

  constructor(title: string) {
      this.title = title;
      Book.count++;
  }

}

let book1:Book = new Book('젊은 베르테르의 슬픔');
let book2:Book = new Book('파우스트');

console.log(Book.count);