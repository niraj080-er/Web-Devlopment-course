function getCheese(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const cheese = "🧀"
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
         const dough = cheese + "🍩" ;
         resolve(dough);
        // reject('Bad cheese')
        }, 2000);
    });
}

function bakePizza(dough){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);    
    });
}

async function orderPizza(){
    try{
        const cheese = await getCheese();
        console.log("Here is the chees", cheese);

        const dough = await makeDough(cheese);
        console.log("Here is the dough", dough);

        const pizza = await bakePizza(dough);
        console.log("Here is your Pizza", pizza);
    } 
    catch (err){
        console.log("erroe occrured");
    }
    console.log("Procces ended");
}
orderPizza();

// getCheese()
//     .then((cheese)=>{
//         console.log("Here is the chees", cheese);
//         return makeDough(cheese);
//     })
//     .then((dough)=>{
//         console.log("Here is the dough", dough);  
//         return bakePizza(dough);
    
//     })
//     .then((pizza)=>{
//         console.log("Here is your Pizza", pizza);
//     })
//     .catch((data)=>{
//         console.log("Error accurs", data);
//     })
//     .finally(() =>{
//         console.log("Procces ended");
//     });