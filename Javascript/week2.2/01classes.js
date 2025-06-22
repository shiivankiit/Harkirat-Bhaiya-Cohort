//In javascript classes are a way to define blueprint for creating objects.
class Rectangle{
    constructor(width,height,color){//constructor run automatically when you create a object.
        this.width=width;           //it's main job is to initialize the object properties.
        this.height=height;
        this.color=color;//this refer to the current object  being crated or used. it allows you to attach the value.
    }
    area(){
        const area=this.width*this.height;
        return area;
    }
    paint(){
        console.log(`Paint with color ${this.color}`)
    }

}
const rect=new Rectangle(2,4,"red");//rect is an instance of a rectangle class.,object of rectangle class.
const area= rect.area();
rect.paint();
console.log(area);

