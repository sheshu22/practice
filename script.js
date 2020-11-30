let btn = document.querySelector("#btn-translate");
let txtArea= document.querySelector("#txt-area");
let output=document.querySelector("#trans");

function clickFn()
{
    console.log(txtArea.value);
    output.innerHTML=txtArea.value;
};

btn.addEventListener("click", clickFn);

let p=document.getElementById("para").innerHTML="lollllllll";

document.querySelector("#ulist a").style.color="yellow"

document.querySelector(".link1").style.color="red";

// function sum(a,b)
// {
//     let x=a+b;
//     console.log(x);
//     // return a+b;
// }

//arrow functons
sum = ()=>
{
    console.log("this is function");   
}

sum(1,11);

//setinterval and setTimeout
setTimeout(sum,20000);

let x= setInterval(sum,2000);

//clearInterval(x);
