const obj1 ={
    firstName: 'Vishal',
    lastName: 'Prajapati',
    age : 25,
    printobject : function (){
        console.log(this.firstName + " " + this.lastName +" age is " + this.age)
    }
}
obj1.printobject();

const obj2 = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    age: 55
}
obj1.printobject.call(obj2);