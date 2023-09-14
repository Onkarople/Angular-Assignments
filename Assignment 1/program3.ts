

function DisplayFactors(No:number):void
{
    
    for(var Cnt=1;Cnt<=No/2;Cnt++)
    {
        if((No%Cnt)==0)
        {
            console.log(Cnt);
        }
    }
}


var iRet : void=DisplayFactors(20);