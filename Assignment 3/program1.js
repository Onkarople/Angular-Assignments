var Arthematic = /** @class */ (function () {
    function Arthematic(Number1, Number2) {
        this.Number1 = Number1;
        this.Number2 = Number2;
    }
    Arthematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arthematic.prototype.Substration = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arthematic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arthematic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arthematic;
}());
var obj = new Arthematic(11, 10);
var Ret = obj.Addition();
console.log("Addition is :" + Ret);
