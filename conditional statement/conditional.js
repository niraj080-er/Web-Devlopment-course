// if-else statement
let age1 = 20;

if(age1 >= 18){
    console.log("you are inside");
    console.log("you can vote");
    }
    else{
        console.log("You can not vote");

    }
// if-else-else-if-else statement

const  marks = 49;
if(marks > 90)
{
    console.log("A+");

}
else if (marks>=80)
{
    consolr.log("A");

}
else if(marks>=70)
{
    console.log("(B+");

}
else if(marks >=60)
{
    console.log("B");
}
else
{
    console.log("Marks is very low");
}

// Nestated if-else statement
let age = 65;

if(age >= 18){
    console.log("you are inside")
    console.log("you can vote")
    
    if (age > 60)
    {
    console.log("you can vote two times");
    }
    }
    else{
        console.log("You can not vote");
        if(age <= 14){
            console.log("You have to go for school");
        }
    }

    // Ternary oerator
    const Marks = 50;
    const result =(Marks >= 40) ? "Passed": "Failed" ;
    console.log("result", result);
    
    //  control statement the end
    