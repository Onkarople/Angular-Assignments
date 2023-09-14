function maximum(Arr) {
    var Cnt = 0;
    var iMax = 0;
    Arr.sort();
    for (Cnt = Arr.length - 2; Cnt >= 0; Cnt--) {
        if (Arr[Cnt] != Arr[Arr.length - 1]) {
            iMax = Arr[Cnt];
            break;
        }
    }
    return iMax;
}
var Numbers = [23, 89, 6, 29, 56, 55, 77, 32];
var iRet = maximum(Numbers);
console.log("second Maximum Number Is : " + iRet);
