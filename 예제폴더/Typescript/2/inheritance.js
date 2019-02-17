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
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    // 상위 클래스 method
    // 입력 인자가 있으면 사용하고 없으면 기본값
    Book.prototype.printInfo = function (input) {
        if (input === void 0) { input = 'Initial'; }
        console.log(input);
        console.log(this.title + "\uC758 \uC800\uC790\uB294 {this.author}\uC785\uB2C8\uB2E4.");
    };
    return Book;
}());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, type) {
        var _this = _super.call(this, title, author) || this;
        _this.type = type;
        return _this;
    }
    // method overriding
    EBook.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("\uC81C\uBAA9: " + this.title + ", \uC800\uC790: " + this.author + ", \uD0C0\uC785: " + this.type);
    };
    return EBook;
}(Book));
var book = new EBook('연금술사', '파울로 코엘료', 'PDF');
book.printInfo();
