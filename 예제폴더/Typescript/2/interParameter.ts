interface IBook {
  bookName: string;
  bookAuthor: string;
}

function printBookInfo(paramBook: IBook) : void {
  console.log(paramBook.bookName);
}

let myBook: IBook = {
  bookName: "젊은 베르테르의 슬픔",
  bookAuthor: "괴테"
};

printBookInfo(myBook);
