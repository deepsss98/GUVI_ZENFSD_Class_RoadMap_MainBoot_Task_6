class Circle{
    constructor(radius,color)
    {
      this.radius=(radius==undefined?1.0:radius);
      this.color=(color==undefined?"red":color);
    }

    getradius(){
        return this.radius;
    }
    setradius(radius){
       this.radius=radius;
    }
    getcolor(){
        return this.color;
    }
    setcolor(color){
       this.color=color;
    }

    set_toString(){
        return "Radius: " + this.radius + " Color: " + this.color;  
    }

    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }
}

var x=new Circle();
console.log("Constructor with no parameter: "+x.set_toString());
var y=new Circle(1.5);
console.log("Constructor with single parameter: "+y.set_toString());
var z=new Circle(3,"Yellow");
console.log("Constructor with double parameter: "+z.set_toString());
console.log("Get Radius of circle using getradius method: "+z.getradius());
z.setradius(4)
console.log("Radius of circle after setradius method: "+z.getradius());
console.log("Get Color of circle using getcolor method: "+z.getcolor());
z.setcolor("Blue")
console.log("Color of circle after setcolor method: "+z.getcolor());
console.log("Representation of radius and color in string: "+(z.set_toString()));
console.log("Area Of Circle using getArea method: " +z.getArea());
console.log("Circumference of Circle using getCircumference method: "+z.getCircumference());