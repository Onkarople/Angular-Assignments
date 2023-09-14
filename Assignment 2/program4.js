function ChkAmstrong(No) {
    var temp = No;
    var Cnt = 0;
    var Digit = 0;
    var sum = 0;
    Cnt = temp.toString().length;
    var NoOfdigits = Cnt;
    while (No > 0) {
        Digit = No % 10;
        sum = sum + Math.pow(Digit, NoOfdigits);
        No = Math.floor(No / 10);
    }
    return sum;
}
var No1 = 155;
var Iret = ChkAmstrong(No1);
if (Iret == No1) {
    console.log("Its Amstrong");
}
else {
    console.log("Its not Amstrong");
}
