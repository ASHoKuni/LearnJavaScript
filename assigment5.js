
class Cylinder{
    constructor(radius,height) {
        this.radius = radius;
        this.height = height;

    }

    getVolume(){
    return this.height * Math.PI * this.radius * this.radius;
   };    
}

class Sphere{
    constructor(radius) {
        this.radius = radius;
    }

    getVolume(){
    return (4/3)* Math.PI * this.radius * this.radius * this.radius;
   };    
}

class Cone{
    constructor(radius,height) {
        this.radius = radius;
        this.height = height;

    }

    getVolume(){
    return  Math.PI * this.radius * (2 * this.height/3);
   };    
}

let objCylinder= new Cylinder(5,6);
console.log("Volume Of Cylinder : "+objCylinder.getVolume());

let objSphere =new Sphere(5)
console.log("Volume Of Sphere : "+objSphere.getVolume());

let objCone =new Cone(5,6)
console.log("Volume Of Cone : "+objCone.getVolume());
