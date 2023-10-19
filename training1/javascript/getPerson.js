
function getPerson(){


class Person{
    constructor(firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){
        return   `${this.firstName} ${this.lastName} (age : ${this.age} , email :${this.email})`
        
    }
}

return [ new Person('Maria','Peterson',22,'mp@gmail.com'),
new Person('Lexicon'),
new Person('Steffan','Larsson',25),
new Person('Peter','Jansson',24,'ptr@live.com')]
   /* let print=new Person('Maria','Peterson',22,'mp@gmail.com');
    let print1=new Person('Lexicon');
    let print2=new Person('Steffan','Larsson',25)
    let print3=new Person('Peter','Jansson',24,'ptr@live.com');
    console.log(print);
    console.log(print1);
    console.log(print2);
    console.log(print3);*/
}
console.log(" " +getPerson());


