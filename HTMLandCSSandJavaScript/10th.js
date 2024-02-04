// map is one type of array inbuilt method which is used to to  traveres the array just like for loop
let cart=[
    {
        id:1,
        name:"Iphone",
        price:"800"
    },
    {
        id:2,
        name:"Reame5",
        price:"500"
    },
    {
        id:3,
        name:"car",
        price:"8000"
    },
    {
        id:4,
        name:"Reame8",
        price:"5000"
    },
    {
        id:5,
        name:"bycycle",
        price:"8000"
    },
    {
        id:6,
        name:"Iphone15",
        price:"5000"
    },
]

cart.map((x)=>{
    console.log(x);
})

// filter--> it is used to filter the array
let arr=[
    {
        id:7,
        name:"shirt",
        price:4500
    },
    {
        id:8,
        name:"jeanse",
        price:800
    },{
        id:9,
        name:"sleeper",
        price:450
    },
    {
        id:10,
        name:"pefeume",
        price:300
    },
    {
        id:11,
        name:"t-shirt",
        price:450
    },
    {
        id:12,
        name:"horlickcs",
        price:800
    },
    {
        id:13,
        name:"milk",
        price:4500
    },
    {
        id:14,
        name:"burnvita",
        price:800
    }
]
let ele=arr.filter((element)=>{
    return element.price<500
})
console.log(ele);

// // reduce-->
let total =cart.reduce((sum,x)=>
    sum=sum+x.price,0
)
console.log("Total Price = "+total);