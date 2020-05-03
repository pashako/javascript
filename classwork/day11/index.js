"use strict";

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

const parentClickHandler = () => alert("Parent click handler");
const childClickHandler = () => alert("Child click handler");
const innerChildClickHandler = () => alert("inner child click handler");

parent.addEventListener("click", parentClickHandler );
child.addEventListener("click", childClickHandler );
innerChild.addEventListener("click", innerChildClickHandler );



const handleClick = event => {
    alert(`event.target: ${event.target.id}`);
    console.log(`event.target: ${event.target}`);
    
};

parent.addEventListener("click", handleClick);
