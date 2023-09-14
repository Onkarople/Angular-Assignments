function Fibonaccci(No) {
    var Cnt = 0;
    var n1 = 0;
    var n2 = 1;
    var next = 0;
    for (Cnt = 1; Cnt <= No; Cnt++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        if (n1 > No) {
            break;
        }
        n2 = next;
    }
}
Fibonaccci(21);
