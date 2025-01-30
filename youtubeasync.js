const p1 = new Promise((resolve,reject)=>{setTimeout(()=>resolve('you are the first promise'),10000)})

const p2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>resolve('you are the second promise'),5000)
})

async function twopromise(){
    console.log('Hello World')
    const val1 = await p1
    console.log("Namaste Javascript1")
    console.log(val1)
    
    const val2 = await p2
    console.log('Namaste Javascript2');
    console.log(val2);
}

twopromise();