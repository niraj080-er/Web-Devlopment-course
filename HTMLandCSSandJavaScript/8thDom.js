let h1=document.getElementById("IAS");
console.log(h1);
h1.innerText="Padhai likhayi kro IAS Bano";
h1.style.backgroundColor="red"
h1.style.color="blue";
// <<<-------------------------->>
let paagraph=document.getElementsByClassName("IPS");
console.log(paagraph[0]);
paagraph[0].innerText="Niraj";
paagraph[1].innerText="Munna bhaiya.........!!!";   

// <<<-------------------------->>
let h3=document.getElementsByTagName("h3");
console.log(h3);
h3[0].textContent="IAS,IPS,IRS";

let b=document.getElementsByTagName("input");
console.log(b[0]);
b[0].value="IAS,IPS,IRS";

// <<<-------------------------->>

let a=document.querySelector("#ironman");
console.log(a);
a.innerText="I am a id";

let bc=document.querySelectorAll(".hulk");
console.log(bc);
bc[0].innerText="I am query with collection";

// <<<-------------------------->>
let cc=document.querySelector('h6')
cc.innerText='hello there';

let aimg=document.querySelector("img");
console.log(aimg);
aimg.src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702972873145_tnrw.jpg";
aimg.style.height="200px";
aimg.style.width="500px";

// <<<-------------------------->>

let body=document.querySelector("body");

function changeMode(){
    if(body.style.backgroundColor != "black"){
        body.style.backgroundColor="black";
        body.style.color="white";
    }
    else{
        body.style.backgroundColor="white";
        body.style.color="black";
    }
}