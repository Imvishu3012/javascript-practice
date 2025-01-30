console.log(this) //it will return window object
const normal = function (){
    console.log(this); //it will also return window object
}

const obj = { 
    name: 'Sachin',
    age: 24,
    greet1: function(){
        console.log(this.name + " "+ this.age);
    }
}

obj.greet1(); //it will return Sachin 24


const obj2 = {
    name: 'Vishal',
    age: 25,
    greet: function () {
       const arrow = ()=>{
        console.log(this);
    }
    arrow();
}
}
obj2.greet(); // it will return whole object obj2...
//  bacause here arrow function is getting date from enclosed laxical context of greet function
// here this will point to obj2

obj.greet1.call(obj2); // it will return Vishal 25...
// as will use the function of obj and call it with obj2
