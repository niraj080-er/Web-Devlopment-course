let obj={
    id:2,
    name:"Niraj",
    sal:50000000,
    desi:"CEO",
    isMarried:true,
    course:["web", "DSA","Java"],
    address:{
        hoseNoumber:"26A",
        street:"Bithuna",
        area:"Siwan",
        details:{
            nameOfThe:"Niraj",
            adharId:"67632638546",
            phoneNum:"6280458945"
        }
    }
}
let arr=["web", "DSA","Java",{id:1,name:"Object in side Array"}];
console.log(obj.address.area);
console.log(obj.address.details.nameOfThe);
console.log(obj.isMarried);
console.log(obj.course[2]);
console.log(arr[3].name);

let a=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
]
console.log(a[0].phone); 
function add(a,b){
  if(a==="nh" && b==="nh1"){
    console.log("speed shuold be 80 to 1000");
  }
  else if(a==="sh" && b==="sh1"){
    console.log("speed should be 40 to 60");
  }else if(a==="vr" && b==="vr1"){
  console.log("spdee should be 40");
  }
  else{
    console.log("invalid road");
  }
}
add("vr","nh1");
