abstract class Book {

  public btitle:string;

  constructor(btitle: string) {
      this.btitle = btitle;
  }

  abstract printInfo(): void;
}

class EBook extends Book {

  printInfo(): void {
      console.log(this.btitle);
  }
}

let book:Book = new EBook('젊은 베르테르의 슬픔');
book.printInfo();
