let p=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("hyy girls")
    resolve(pizzza)
  })
})
let pl=new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("hyy girls")
      resolve(burgure)
    })
  })
  let pm=new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("hyy girls")
      resolve(nudels)
    })
  })

  async function order(){
   let pizzza=await getpizza();
   console.log("no")
  }
  order();