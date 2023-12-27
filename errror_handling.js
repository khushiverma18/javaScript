//try-catch
let a=4;
try {
    let c=a/0;
    console.log(c)
}
catch(err){
    console.error("wrong")}


 //error onject
 try{
    hyy
 }  
 catch(erro){
console.error(erro.message);
console.log(erro.name);
console.log(erro.stack);
 } 

 //throw 
 try{
    throw new error("this is throw keyword message")
 }
 catch(er){
    console.log(er.message)
 }

 //final
 try{
    console.log(10/0)
 }
 catch(errors){
    console.log("this not ok")
 }
 finally{
    console.log("always run")
 }

  //ex
  setTimeout(function(){
    console.log("hacking wifi.....please wait...")
  },1000)
  try{
    console(hii guys)
  }
  catch(error){
    console.error("not warre")
  }
  finally{
    console.log("again & again")
  }

  setTimeout(function(){
    console.log("fetching username and password...pleasw wait..")
  },2000)

  setTimeout(function(){
    console.log("hacking rahul's facebooks id...please wait..")
  },4000)

  setTimeout(function(){
    console.log("userpasword and password of rahul(897655456) fetched...please wait...")
  },6000)