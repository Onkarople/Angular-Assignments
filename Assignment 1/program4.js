function Chkprime(No) {
    for (var Cnt = 2; Cnt <= No / 2; Cnt++) {
        if ((No % Cnt) == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var Iret = Chkprime(12);
if (Iret == true) {
    console.log("Its Prime Number");
}
else {
    console.log("Its Not Prime Number");
}
