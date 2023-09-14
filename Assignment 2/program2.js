function Addition(Arr) {
    var sum = 0;
    for (var Cnt = 0; Cnt < Arr.length; Cnt++) {
        sum = sum + Arr[Cnt];
    }
    return sum;
}
var Numberss = [23, 6, 7, 4, 5, 7];
var Ret = Addition(Numberss);
console.log("Addition is : " + Ret);
