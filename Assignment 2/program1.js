function Maximum(Arr) {
    var Cnt = 0;
    var iMax = 0;
    iMax = Arr[0];
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > iMax) {
            iMax = Arr[Cnt];
        }
    }
    return iMax;
}
var Numbers = [23, 89, 6, 29, 56, 55, 77, 32];
var iRet = Maximum(Numbers);
console.log("Maximum Number Is : " + iRet);
