var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.printInfo = function () {
        console.log(this.title + "\uC758 \uC791\uAC00\uB294 " + this.author + "\uC785\uB2C8\uB2E4.");
    };
    return Book;
}());
var book = new Book('연금술사', '파울로 코엘료');
book.printInfo();
