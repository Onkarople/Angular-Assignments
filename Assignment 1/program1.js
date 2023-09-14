function Maximum(No1, No2, No3) {
    if (No1 > No2) {
        if (No1 > No3) {
            console.log("Maximum Number is : " + No1);
        }
        else {
            console.log("Maximum Number is : " + No3);
        }
    }
    else if (No2 > No3) {
        console.log("Maximum Number is : " + No2);
    }
    else {
        console.log("Maximum Number is : " + No3);
    }
}
var ret = Maximum(233, 89, 6);
