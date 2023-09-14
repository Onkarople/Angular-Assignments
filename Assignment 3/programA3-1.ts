

class Arthematic{

    public Number1:number;
    public Number2:number;
 

    constructor(Number1:number,Number2:number)
    {
        this.Number1=Number1;
        this.Number2=Number2;
      
    }


    public Addition():number
    {
        let Ans:number=0;

        Ans=this.Number1+this.Number2;

        return Ans;
    }

    public Substration():number
    {
        let Ans:number=0;

        Ans=this.Number1-this.Number2;

        return Ans;
    }


    public Multiplication():number
    {
        let Ans:number=0;

        Ans=this.Number1*this.Number2;

        return Ans;
    }

    public Division():number
    {
        let Ans:number=0;

        Ans=this.Number1/this.Number2;

        return Ans;
    }



}

var obj=new Arthematic(11,10);

var Ret=obj.Addition();
console.log("Addition is :"+Ret);

var Ret=obj.Substration();
console.log("subsrtaion is :"+Ret);

var Ret=obj.Multiplication();
console.log("multiplication is :"+Ret);

var Ret=obj.Division();
console.log("Division is :"+Ret);


var objNew=new Arthematic(21,11);

var Ret1=obj.Addition();
console.log("Addition is :"+Ret1);

var Ret1=obj.Substration();
console.log("subsrtaion is :"+Ret1);

var Ret1=obj.Multiplication();
console.log("multiplication is :"+Ret1);

var Ret1=obj.Division();
console.log("Division is :"+Ret1);





