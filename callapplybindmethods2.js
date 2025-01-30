// first create two objects with properties firstname , lastname and age and then create a function printname
// which will print the name and age of the object and also the hometown and state of the object
const obj1 = {
    firstName: 'Vishal',
    lastName: 'Prajapati',
    age: 25,

}

const obj2 = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    age: 44,
}

const printName = function (hometown, state){
    console.log(this.firstName + " " + this.lastName + " age is " + this.age + " and he is from " + hometown +", " + state)
}


printName.call(obj1,'Mumbai', 'Maharashtra') //using function and print both objects data
printName.call(obj2,'Prayagraj', 'Uttar Pradesh')

printName.apply(obj1,['Mumbai', 'Maharashtra']) // same as call but here we pass array of arguments
printName.apply(obj2,['Prayagraj', 'Uttar Pradesh'])

let printMyName = printName.bind(obj2,'Mumbai','Maharashtra')// same as call but here we wrap it in a function and then call it later
printMyName();