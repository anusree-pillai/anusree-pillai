class Pointer{
    constructor(x,y) {
        this.x=x;
        this.y=y;

    }
    static distance(a,b){
        let dis1 = a.x-b.x;
        let dis2=a.y-b.y;
        let result=Math.sqrt((dis1*dis1) +(dis2*dis2))
        return result;

    }
}
let p1 = new Pointer(50,20);
let p2= new Pointer(10,5);


let display = Pointer.distance(p1,p2);
console.log(p1);
console.log(p2);
console.log(display);