var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(btitle) {
        this.btitle = btitle;
    }
    return Book;
}());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EBook.prototype.printInfo = function () {
        console.log(this.btitle);
    };
    return EBook;
}(Book));
var book = new EBook('젊은 베르테르의 슬픔');
book.printInfo();
