let myDate=new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())

//
let mycreatdate=new Date(2003,7,4)
console.log(mycreatdate.toDateString());
console.log(mycreatdate.toLocaleDateString())

//
let date=new Date()
console.log(date)               // in millisec
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate())
console.log(Math.floor(Date.now()/1000))