    //          <<<<-----  Array Callback Function ----->>>>
    
    // find() array callback function
const a=[2, 4, -5, 6, 7, 8,-4, -5, 12]
 const firstNeg=(num) =>
 {
    return num < 0;
 }
 const result = a.find(firstNeg);
 console.log(result);


 // findindex() array callback function
 const result2 = a.findIndex(firstNeg);
 console.log(result2);


//  map() array callback function

const result3 = a.map(firstNeg);
 console.log(result3);


//  filter () array callback function

const result4 = a.filter(firstNeg);
 console.log(result4);


 // every() array callback function

 const result5 = a.every(firstNeg);
 console.log(result5);

 
//   some() array callback function
const result6 = a.some(firstNeg);
 console.log(result6);