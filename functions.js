//function
function one(a,b){
 console.log("start")
return 1+(a+b)/2

}
let x=4;
let y=8;
let z=9;
console.log("avrage",one(x,y))
console.log("avrage",one(y,z))
console.log("avrage",one(z,x))

//arrow function
let sum=(p,q)=>{
return p+q;
}

console.log(sum(7,8));


//without parametar
let hello=()=>{
    console.log("hyy guys")
    return "hii"
}
console.log(hello())


//avrage of 5no
let avr=(a,b,c,d,e)=>{
return a+b+c+d+e/2
}
console.log(avr(4,9,7,5,5))