var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CricleX = /** @class */ (function (_super) {
    __extends(CricleX, _super);
    function CricleX(Data) {
        return _super.call(this, Data) || this;
    }
    CricleX.prototype.CaculateCircumfernec = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CricleX;
}(Circle));
var obj = new CricleX(11);
var Ret = obj.calculateArea();
console.log("Area of circle is  : " + Ret);
var Ret = obj.CaculateCircumfernec();
console.log("circumference is : " + Ret);
var objNew = new CricleX(12);
var Ret = objNew.calculateArea();
console.log("Area of circle is  : " + Ret);
var Ret = objNew.CaculateCircumfernec();
console.log("circumference is : " + Ret);
