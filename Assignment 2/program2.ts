
function Addition(Arr:number[]): number
{
   var sum : number=0;
   for(var Cnt=0;Cnt<Arr.length;Cnt++)
   {
      sum=sum+Arr[Cnt];
   }

   return sum;
}

var Numberss: number[]=[23,6,7,4,5,7];

var Ret: number =Addition(Numberss);

console.log("Addition is : "+Ret);