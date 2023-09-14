function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var area = PI * Radius * Radius;
    return area;
}
var Ret = Area(5);
console.log("Area of Circle is : " + Ret);
