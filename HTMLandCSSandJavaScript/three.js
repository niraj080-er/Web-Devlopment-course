let a=19;
let b=21;
console.log(a!==b);      // true                                   
console.log(a==b); // false
console.log(a===b); // false
console.log(a!=b); // true
console.log(a!==b); // true

let c=3;
console.log(c**c); // 27
console.log(true+true); //2
console.log(2+'he'+100+true+null);// 2he100truenull
console.log(4+4+9-"hello"+true); // Nan
console.log(9*8*4/"hello"+100); //NaN
console.log(100+3+-true*0/4/0); // Nan

console.log(2^2); // 0
console.log(2**3); // 8
console.log(21+34+23-23*2/2%4); //75
console.log("paan"+"ka"+"moye moye"-2); //Nan
console.log(true+true);//2
console.log(false+false); //0
console.log(2+"c"); // 2c
console.log(2-"c"); //Nan
console.log(12*2+true+"10"+2);// 25102
console.log(12*2+true+"10"+2+2/2-4*12+12); // 2509985
console.log(typeof(12*2+true+"10"+2+2/2-4*12+12)); // number

console.log(0/0);

function add(n1,n2){
    console.log(n1+n2);
}
add(10,22);

function sub(m,m1)
{
    return m-m1;
}
sub(20,10);
let z=5;
for(let i=0; i<z; i++){
    console.log("hello");
}