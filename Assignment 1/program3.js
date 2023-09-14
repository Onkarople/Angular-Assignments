function DisplayFactors(No) {
    for (var Cnt = 1; Cnt <= No / 2; Cnt++) {
        if ((No % Cnt) == 0) {
            console.log(Cnt);
        }
    }
}
var iRet = DisplayFactors(20);
