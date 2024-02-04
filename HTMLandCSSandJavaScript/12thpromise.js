// let data =new Promise((res,reg)=>{
//     if(res){
//         console.log("Transmission"+res);
//     }else{
//         console.log("Invalid Transsmission"+reg);
//     }
// })
// data.then((res)=>{
//     console.log("Succesfull"+res);
// })
// .catch((res)=>{
//     console.log("Error"+rej);
// })

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    res.json()
    .then((success)=>{
        console.log(success);
    })
    .catch((rejecet)=>{
        console.log(rejecet);
    })
})
.catch((err)=>{
    console.log(err);
})

