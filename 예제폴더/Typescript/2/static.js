var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
        Book.count++;
    }
    return Book;
}());
var book1 = new Book('젊은 베르테르의 슬픔');
var book2 = new Book('파우스트');
console.log(Book.count);
