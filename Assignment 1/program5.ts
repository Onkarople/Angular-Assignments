
function Fibonaccci(No:Number):void
{
    var Cnt : number=0;
    var n1 : number=0;
    var n2 : number=1;
    var next :number =0;
    for(Cnt=1;Cnt<=No;Cnt++)
    {
        console.log(n1);
        next=n1+n2;
        n1=n2;
       
        if(n1>No)
        {
            break;
        }
        n2=next;
       
    }
}


Fibonaccci(21);