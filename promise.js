//1 method
let Promiseone=new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log(" hyy i am your big fan")
        resolve()
    },4000)
})
Promiseone.then(function(){
    console.log("promise consumed")
})

//2 method
new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log(" hyy i am your big fan");
        resolve()
    },3000)
}) 
.then(function(){
    console.log("this is second method")
})

//3 method
let promice3=new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log(" hyy i am your big fan")
        resolve({username:"khushi" ,email:"khushi@srm.com",age:20})
    },4000)
})
promice3.then(function(user){
    console.log(user);
})

//4 method
let promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"muskan", age:24 })
        }
        else{
            resolve({error:"some thing is wrong"})
        }
    },1000)
})
promise4.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("yes"))


