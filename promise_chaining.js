//chaining
let p1=new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log(" hyy i am your big fan");
        resolve("value of p1")
    },3000)  
})
p1.then((value)=>{
console.log(value)
 return new Promise(function(resolve,reject){
setTimeout (function(){
    resolve("promise2")
},2000)
})
return p2
}).then((value)=>{
    console.log("we are goning")
    return 2;
}).then((value)=>{
    console.log('yes done')
})



//multiple handler
let ps=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("this is new promise")
        resolve()
    },4000)
})

ps.then(function(){
    console.log("hurry")
})
ps.then(function(){
    console.log("huurry broo")
})
