"use strick"

// const LogItems = function(array){
//     for (let i = 0; i < array.lenght ; i++)
//     {
//         console.log(`${i+1}-${array[i]}`)
//     }
// }

// const calculateEngravingPrice = function(message, pricePerWord){
//     let mass = message.split(' ');
//     let result = pricePerWord * mass.lenght;
//     return result;
// }

// const flw = function(string){
//     let lw = "";
//     let arr = string.split(' ');

//     for (let i = 0; i < arr.lenght; i++){
//         lw = string[0];
//         if (arr[i].lenght > lw.lenght )
//         {
//             lw = string[i];
//         }
//     }
//     return lw;
// }

// const fs = function(string){
//     let ns;
//     if (string.lenght>40) {
//         ns = string.slice
//     }
// }

// const hotel = {
//     name: "Hurgada",
//     stars: 5,
//     rooms: ["deluxe", "vip", "lowcost"]
// };

// console.log(hotel.name);
// console.log(hotel["name"]);

// hotel.adress = "lesi Ukrainki 5"

// const name = "Taba";
// const stars = 5;

// const newHotel= {
//     name,
//     stars,
//     address: "Lesi Ukrainki 26"
// };

// const hotel = {
//     name: "Hurgada",
//     stars: 5,
//     greetings(){
//         console.log(`Welckome to ${hotel.name} it's ${hotel.stars} hotel`)
//     }
//     changeCapacity(value){
//         this.capacity = value;
//     }
// };

// console.log(hotel.greetings());
// hotel.changeCapacity(500);
// console.log(hotel);

let numbers = [];
let sum = 0;

let num;

do{
    let num = prompt("Enter number");
    if(num && +num){
    numbers.push(+num);
    }
    else if(numbers && !num){
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];

    }
    else {
        ("enter number")
    }
    return sum;
}
}while(num)

console.log(sum);
