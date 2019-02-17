function printBookInfo(paramBook) {
    console.log(paramBook.bookName);
    console.log(paramBook.getName());
}
var myBook = {
    bookName: "젊은 베르테르의 슬픔",
    bookAuthor: "괴테",
    getName: function () {
        return this.bookName;
    }
};
printBookInfo(myBook);
