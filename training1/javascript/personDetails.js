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
    let print=new Person('Maria','Peterson',22,'mp@gmail.com');
    console.log(print);
