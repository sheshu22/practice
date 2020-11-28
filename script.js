let btn = document.querySelector("#btn-translate");
let txtArea= document.querySelector("#txt-area");


console.log(txtArea);

function clickFn()
{
    console.log("clicked");
    console.log(txtArea.value);
};

btn.addEventListener("click", clickFn);
