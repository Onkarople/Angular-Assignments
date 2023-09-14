var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.Radius = radius;
        this.PI = 3.14;
    }
    Circle.prototype.calculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(11);
var Ret = obj.calculateArea();
console.log("Area of Circle is : " + Ret);
var obj1 = new Circle(12);
var Ret = obj1.calculateArea();
console.log("Area of Circle  is : " + Ret);
