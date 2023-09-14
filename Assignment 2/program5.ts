
function ChkString(str:string,word1 : string):void
{
    var strstrim : string[] = str.split(" ");
   
    
    for(var word in strstrim)
    {
       

        if(strstrim[word]===word1)
        {
            console.log(" present word Is : "+word1);
            break;
            
        }
       
    } 
}

var string1:string="pune kothrud marvellous infosystems";
var string2:string="marvellous";
ChkString(string1,string2);