// callback function --> a function which pass as arguments to the another function
 setTimeout(()=>{
    console.log("It will show the output after 2 seocnd");
 },2000)
 
 setTimeout(()=>{
    console.log("it was executed after few second");
 },3000)
 
 // higher order function --> A function which take the another function as parameter

 function sum(a,b){
    return a+b;
 }
 function add(a,b,sum){
    return a+b+sum
 }
 let a=add(12,12,sum(10,10))
 console.log(a);

 //anonymous function--> those function does not have the any function(a function without name  with parameter)
let aa=function(a,b){
    console.log("anonymous");
}
console.log(typeof(aa));
aa(11,12);

// arrow function --> A function which use the arrow symbol (=>)
let arrow= (a,b)=>{
    console.log("I am the arrow function"+(a+b));
}
arrow(12,21);
