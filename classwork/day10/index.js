"use strict";

// const input = document.querySelector("#validation-input");
// function inputHandler(){
//     if (input.nodeValue.length <= input.dataset.length){
//         input.className = "valid";
//     } else {
//         input.className = "invalid";
//     }

// }

// input.addEventListener("focusout", inputHandler);


///////////////////////////////////////////////////////


// const input = document.querySelector("#font-size-control");

// const inputt = document.querySelector("#text")
// function ggg(){
//     console.log(input.value);
//     inputt.getElementsByClassName.fontSize = input.value + "px";
// }
// input.addListenerEvent("input",ggg);

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function createBoxes(amount){
    let size = 30;
    for(let i= 0;i<amount; i++){
        let r =Math.floor(Math.random() * 255);
        let g =Math.floor(Math.random() * 255);
        let b =Math.floor(Math.random() * 255);
        const div = document.createElement('div');
        div.style.width = size + "px";
        div.style.height = size + "px";
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        size +=10;
        boxes.append(div);
}
}

function destroyBoxes(){
    boxes.innerHTML = "";
}
function eventHandler({target}){
    if (target.dataset.action === "render"){
        createBoxes(controls.firstElementChild.value);

    } else if(target.dataset.action === "destroy"){
        destroyBoxes();
    } else{
        return;
    }
}

controls.addEventListener("click", eventHandler)