//promicse Api
let pro1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("value of pro1")
        resolve("value 1")
    },1000)
})

let pro2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("value of pro2")
        resolve("value 2")
    },2000)
})

let pro3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("value of pro3")
        resolve("value 3")
    },4000)
})

//promise.all
let promicse1=Promise.all([pro1,pro2,pro3])
promicse1.then((value)=>{
    console.log(value)
})

//promise.allSettled
let promicse2=Promise.allSettled([pro1,pro2,pro3])
promicse2.then((value)=>{
    console.log(value)
})

//promise.race
let promicse3=Promise.race([pro1,pro2,pro3])
promicse3.then((value)=>{
    console.log(value)
})

//promise.any
let promicse=Promise.any([pro1,pro2,pro3])
promicse.then((value)=>{
    console.log(value)
})

//promise.resolve
let promicse4=Promise.resolve(6)
promicse4.then((value)=>{
    console.log(value)
})

//promise.reject
let promicse5=Promise.reject([new Error("hyee")])
promicse5.then((value)=>{
    console.log(value)
})