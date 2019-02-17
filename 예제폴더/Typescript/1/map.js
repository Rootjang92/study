var map = new Map();
map.set("myName", "장근호");
map.set("myAddress", "인천");
map.set("myAge", 26);
for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
    var _a = map_1[_i], key = _a[0], value = _a[1];
    console.log(key + "\uC758 \uAC12\uC740 " + value + "\uC785\uB2C8\uB2E4.");
}
for (var _b = 0, map_2 = map; _b < map_2.length; _b++) {
    var key = map_2[_b][0];
    console.log("" + key);
}
for (var _c = 0, map_3 = map; _c < map_3.length; _c++) {
    var _d = map_3[_c], value = _d[1];
    console.log("" + value);
}
