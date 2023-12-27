//collback
function main(a,b,sum){
   return sum(a,b)
}
//method 1
let add=main(3,4,function(x,y){
    return x+y;
})
console.log(add)


//method 2
let sub=(a,b) => a-b;
let result=main(8,5,sub);
console.log(result)


//method 3
function multiply(a,b){
    return a*b;
}
let myres=main(9,4,multiply)
console.log(myres);

function divid(a,b){
    return a/b;
}
let resul=divid(10,2)
console.log(resul)