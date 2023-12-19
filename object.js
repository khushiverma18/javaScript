const student={
    name:'khushi',
    phnno:9873673673,
    marks:790,
    class:2
}
console.log(student)


//change class value
student.class=4;

//add one more item
student['subject']="maths";
console.table(student)

//marks
let marks={
    khushi:500,
    muskan:450,
    simmi:430,
    ginni:279
}
for(let key in marks){
    console.table("the marks of"+key+"are"+marks[key])
}


//using function
function fuct(fc){
    console.log("orignal:",fc)
    console.log(Object.keys(fc))
    console.log(Object.values(fc))
    console.log(Object.entries(fc))
    console.log(Object.hasOwnProperty(fc))
    fc['subject']="english"
    console.table(fc)
}
let obj={
    name:"khushiverma",
    class:10,
    add:"modinage"
}
fuct(obj);