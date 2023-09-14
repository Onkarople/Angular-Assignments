class Circle
{
    Radius : number;
    PI : number;


    constructor(radius : number)
    {
        this.Radius=radius;
        this.PI=3.14;
    }

    calculateArea():number
    {
        let Ans : number=0;

        Ans=this.PI*this.Radius*this.Radius;

        return Ans;
    }


}

class CricleX extends Circle
{
    constructor(Data : number)
    {
        super(Data)
    }

    CaculateCircumfernec()
    {
        let Ans : number =0;
        Ans= 2 * this.PI*this.Radius;
        return Ans;
    }
}

var obj= new CricleX(11);


var Ret : number = obj.calculateArea();
console.log("Area of circle is  : "+Ret);


var Ret : number = obj.CaculateCircumfernec();
console.log("circumference is : "+Ret);



var objNew= new CricleX(12);


var Ret : number = objNew.calculateArea();
console.log("Area of circle is  : "+Ret);


var Ret : number = objNew.CaculateCircumfernec();
console.log("circumference is : "+Ret);



