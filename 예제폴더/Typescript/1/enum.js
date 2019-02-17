var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 2
myColor = Color.Blue;
console.log(myColor); // 4
