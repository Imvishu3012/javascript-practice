const stage1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('task 1 completed'),3000)
})
const stage2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('task 2 failed'),2000)
})
const stage3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('task 3 completed'),4000)
})

Promise.allSettled([stage1,stage2,stage3])
.then((result)=>console.log(result))
.catch((error)=>console.error(error)) 