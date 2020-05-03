"use strict";

// const arr = ["a", "b", "c", "d"];

// for (let i = 0; i < arr.length; i++)
//     console.log(`под номером ${i+1} значение ${arr[i]}`);











// const user = {
//     name: "Lol",
//     age: 13,
//     gender: "male",
//     isworking: false
// };

// console.log(Object.keys(user).length);

// user.haspet = true;

// user.isworking = true;

// delete user.gender;
// for (const key in user){
//     console.log(`${key}: ${user[key]}`);
    
// }











// let arr = [];
// let message ;
// do {
//     message = prompt("enter number");
//     arr.push(Number (message));
// } while (message !==null);

// const sum = arr.reduce((acc, el)=> acc += el, 0);

// console.log(sum);









// const arr = ["Oleg", "Egor", "Nikita"];
// arr.unshift("lol");
// arr.pop();
// arr.shift();
// console.log(arr);
// const str = "hello, my name is pasha";
// const arr = str.split(" ");
// console.log(arr.length);
// const newarr = arr.slice(1);
// console.log(newarr);
// const newstr = newarr.join(" ");
// console.log(newarr);








// const arr = [
//     {
//         name: "Oleg",
//         age: 15
//     },
//     {
//         name: "Dima",
//         age: 14
//     },
//     {
//         name: "Maks",
//         age: 16
//     },
//     {
//         name: "Bogdan",
//         age: 10
//     }
// ];

// const newArr = arr.filter(el => el.age > 14);
// console.log(newArr);


// const sum = arr.reduce((acc,el) => acc += el.age, 0);
// console.log(sum);

// const year = arr.find(el.age === 100 );
// console.log(year);

// let message = prompt("Enter your pasword");
// const arr = ["qwerty", "00000000", "olegoleg"];
// const validation = function(value){
//     if (value.length > 4){
//         return true;
//     }else{
//         return false;

//     }
// };

// const pass = function(correct){
//     if (arr.includes(correct)){
//         return true;
//     }else{
//         return false;
//     }
// };

// const res = function(message){
//     if (validetion(message) && pass(message)){
//         return alert("Welcome!") ;
//     }else{
//         return alert("Incorect pasword!")
//     }
// }

// console.log(res(message));



















// const arr = [
//     {
//         name:"apple",
//         price:10
//     },
//     {
//         name:"pineapple",
//         price:30
//     },
//     {
//         name:"potato",
//         price:5 
//     },
//     {
//         name:"lemon",
//         price:50
//     },
//     {
//         name:"cherry",
//         price:20
//     },
    
    
// ];


// const list = document.querySelector("#list");


// const str = arr.reduce((acc,el) => acc +=`<li><h2>${el.name}</h2><p>${el.price}</p></li>`,"");
// list.innerHTML = str;










const control = document.querySelector("#control");
// const incris = (value)=> value += 1;
// const decris = (value)=> value -= 1;
const eventHandler = function(e){
    if(e.target.dataset.control === "decris"){
        control.children[1].textContent = (Number(control.children[1].textContent)) - 1;
    }else if(e.target.dataset.control === "incris"){
        control.children[1].textContent = (Number(control.children[1].textContent)) + 1;
    }
    else{
        return;
    }
};
control.addEventListener("click", eventHandler)