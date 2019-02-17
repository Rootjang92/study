interface IBook {
  bookName: string;
  bookAuthor: string;
  bookISBN?: string;   // Optional Property

  getName(): string;
}

function printBookInfo(paramBook: IBook) : void {
  console.log(paramBook.bookName);
  console.log(paramBook.getName());
}

let myBook: IBook = {
  bookName: "젊은 베르테르의 슬픔",
  bookAuthor: "괴테",

  getName: function() {
     return this.bookName;
  }
};

printBookInfo(myBook);