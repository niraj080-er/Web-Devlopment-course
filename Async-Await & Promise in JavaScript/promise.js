function getCheese()
{
    setTimeout(() => {
        const cheese = "🌰";
        return cheese;
    }, 2000);
}


  const ticket  = new Promise(function (resolve, reject){
    const isBoarded = true;
    if(isBoarded){
        resolve("You are not in the flight.");
    }
    else{
        reject("your flight has been cencle");
    }
  });
  ticket
  .then((data)=>{
    console.log("woho", data);
  })
  .catch((data)=>{
    console.log("oh no", data);
  })
  .finally(()=>{
    console.log("waiting list");
  });