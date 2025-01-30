const mypromise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('you are very handsome'),10000)
    
})

async function getData(){
    mypromise.then((result)=>console.log(result))
    console.log('you are first handsome to be printed')
}

getData();