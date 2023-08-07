
//     <<<<<<<----- Callback Hell in JavaScript ------->>>>>>

console.log("Helllo");

setTimeout (function (){
    console.log('this thing will print latter');
},  3000);

console.log("world");
console.log("three");

function getrose(callback){
    setTimeout(() => {
        const rose= "🌰";
        console.log("here is the rose", rose);
        callback(rose);
    }, 2000);
}


function makeDough(rose, callback){
    setTimeout(() => {
       const ak = 'niraj kumar'
        console.log("here is candidate");
        callback(ak);
    }, 5000);
}

function Pizza(rose, callback){
    setTimeout(() => {
       const akk = 'domanise pizza'
        console.log("pizza name");
        callback(akk);
    }, 2000);
}

 
getrose((rose) => {
    makeDough(getrose , (ak) =>{
    Pizza(makeDough, (akk) =>{
        console.log(akk);
    });
    console.log('name--->', ak);
    });
});


  