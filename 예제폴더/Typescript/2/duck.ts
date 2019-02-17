interface IBook {
  bookName: string;
  bookAuthor: string;
}

function printBookInfo(paramBook: IBook) : void {
  console.log(paramBook.bookName);
  // interface type으로 지정되지 않고 parameter로 전달이 되었다. 그래서 이상이 있을 것 같지만 없다.
}

let myBook = {
  bookName: "젊은 베르테르의 슬픔",
  bookAuthor: "괴테",
  bookPrice: 3000
};

printBookInfo(myBook);

// 문제가 있는 게 맞을까??