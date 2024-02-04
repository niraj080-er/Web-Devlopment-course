let h1=document.getElementById('d1')
let fetchData=async()=>{
    let data= await fetch('https://jsonplaceholder.typicode.com/users');
    let actualData=await data.json();
    console.log(actualData);
    h1.textContent=actualData[0].name;
}
fetchData();