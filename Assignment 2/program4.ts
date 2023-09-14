
function ChkAmstrong(No : number):number
{
    var temp : number=No;
    var Cnt : number=0;
    var Digit:number=0;
    var sum :number=0;

    Cnt = temp.toString().length;

    var NoOfdigits : number = Cnt;

    while(No>0)
    {
        Digit=No%10;
        sum=sum+Digit**NoOfdigits;
        No=Math.floor(No/10);
    }

    return sum;
}


var No1 : number =153;
var Iret : number=ChkAmstrong(No1);


if(Iret==No1)
{
    console.log("Its Amstrong")
}
else
{
    console.log("Its not Amstrong")
}



