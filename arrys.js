let num=[3,8,6,4]
console.log(num.toString());
console.log(num.join("-"));
console.log(num.pop());
console.log(num.push(9));
console.log(num.shift());
console.log(num.unshift(6));
console.log( num);
delete num[1]
console.log(num);
console.log(num.sort());


//concat array
let srv2=[5,95,75,77,87,88]
function arr(srv){
    console.log("orignal:",srv)
    console.log("after",srv.concat(srv2));
}
arr([64,6,4,4,5,5,33]);


// aaray pop
function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);


//slice array
function sliceex(str){
console.log("orignal:",str)
console.log("after slice:",str.slice(1,4))
} 
sliceex([2,9,7,66,55,46]);

//splice array
function spliceex(main){
    console.log("before:",main)
    console.log("after splice",main.splice(4,8,76))
}
spliceex([4,8,6,5,7]);