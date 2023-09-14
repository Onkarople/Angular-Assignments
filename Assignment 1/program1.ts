
function Maximum(No1:number,No2:number,No3:number) : void
{
   if(No1>No2)
   {
      if(No1>No3)
      {
        console.log("Maximum Number is : "+No1);
      }
      else
      {
        console.log("Maximum Number is : "+No3);

      }
   }
   else if(No2>No3)
   {

    console.log("Maximum Number is : "+No2);

   }
   else
   {
    console.log("Maximum Number is : "+No3);

   }
}



var ret : void = Maximum(23,89,6);