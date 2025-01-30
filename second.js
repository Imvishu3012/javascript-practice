const stage1 = new Promise((resolve, reject)=>{
    resolve('you are smart')
})

async function testing() {
    try
    
    { const result =await stage1
        return result;
    
}
catch(error){
    return error;
}
}
testing().then((result)=>console.log(result))