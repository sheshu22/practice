let btn = document.querySelector("#btn-translate");
let txtArea= document.querySelector("#txt-area");
let output=document.querySelector("#trans");

function clickFn()
{
    console.log(txtArea.value);
    output.innerHTML=txtArea.value;
};

btn.addEventListener("click", clickFn);
