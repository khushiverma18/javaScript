//looping through array
//loop..
let m=[5,99,55,765,9]
for(let i of m){
    console.log(i)
}

//loop
function loopex(ex){
  console.log(ex)
for(let i=0;i<ex.length;i++){
  console.log(ex[i])
}
}
loopex([5,8,6,5,3,8])

//foreach loop
function foreachex(nee){
  console.log("befor:",nee)
let newnee=nee.forEach((item)=>{
  return item*item
})
console.log("after:",newnee)
}
foreachex([4,4,5,6,7,87,765])


//map
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

//
let arr=[4,56,78,867,5]
let a=arr.map((value,index)=>{
console.log(value,index)
return value+2
})
console.log(a)


//filter
function filterex(fil){
  console.log("before:",fil)
  let newfil=fil.filter(function(element){
    return element<10
  })
  console.log("after:",newfil)
}
filterex([3,33,2,33,23,5,54])


//
let ary=[4,5,22,45,66,46,44]
let b=ary.filter((item)=>{
  console.log(item)
  return item<25
})
console.log(b)

//reduce array
let arr2=[22,54,656,86,76,55,3,5,6,5,757,7,,7,67,57,444444,65]
let c=arr2.reduce((h1,h2)=>{
  return h1+h2
})
console.log(c)


//
function reduceex(rees){
  console.log("before:",rees)
  let p=rees.reduce(function(h1,h2){
    return h1+h2
  })
  console.log("after:",p)
}
reduceex([2,3,5,6,75,43,22])