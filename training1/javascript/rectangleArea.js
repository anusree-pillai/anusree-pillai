class Rectangle {
    constructor(height,width,color) {
        this.height=height;
        this.width=width;
        this.color=color;
    }


     calcArea() {
       // this.height=height;
       // this.width=width;
        var area= this.height *this.width;
        return area;
        
    }
}
    let result=new Rectangle(10,20,'blue');
    console.log(result.calcArea());
    console.log(result);

