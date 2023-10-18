class Circle{
    constructor(radius){
        this.radius=radius;
    }
    
    get  (){
       // this.radius = radius;
      // const diam =   2*radius;
       return this.radius;
        
  }
  set (radius){
    this.radius=radius;

  }
  area(radius){
    //radius=this.get(radius);
   // this.set(radius);
   //const ar= 3.14 * Math.pow(radius, 2);
   return  Math.PI*this.radius**2;
  }
  diameter(radius){
    return this.radius*2;
  }

    
    }
    let obj=new Circle(2);
    //console.log(obj);
    //console.log(`radius :${obj.set(2)}`);
    console.log(`diameter :${obj.get()}`);
    console.log(` Area :${obj.area()}`);
    //console.log(``)