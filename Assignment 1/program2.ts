

function Area(Radius:number,PI:number=3.14): number
{
    var area : number =PI*Radius*Radius;

    return area;
}


var Ret : number=Area(5);

console.log("Area of Circle is : "+Ret);