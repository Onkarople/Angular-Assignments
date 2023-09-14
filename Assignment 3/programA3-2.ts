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

var obj= new Circle(11);

var Ret : number = obj.calculateArea();

console.log("Area of Circle is : "+Ret);


var obj1= new Circle(12);

var Ret : number = obj1.calculateArea();

console.log("Area of Circle  is : "+Ret);


