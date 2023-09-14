
function Maximum(Arr:number[]):number
{
    var Cnt : number =0;
    var iMax : number =0;
    iMax=Arr[0];


    for(Cnt=0;Cnt<Arr.length;Cnt++)
    {
        if(Arr[Cnt]>iMax)
        {
            iMax=Arr[Cnt];
        }
    }
    return iMax;
}

var Numbers : number[]=[23,89,6,29,56,55,77,32];

var iRet : number = Maximum(Numbers);

console.log("Maximum Number Is : "+iRet);