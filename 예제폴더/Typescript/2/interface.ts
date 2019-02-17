interface IBook {
  bookName: string;
  bookAuthor: string;
}

let myBook: IBook;

myBook = {
  bookName: "젊은 베르테르의 슬픔",
  bookAuthor: "괴테"
};

console.log(myBook);