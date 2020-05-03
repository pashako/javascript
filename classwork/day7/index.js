"use strict"

// const Account= function(login, email){
//     this.login = login;
//     this.email = email;

//     getInfo = function(){
//         console.log(`login ${this.login} email ${this.email}`);
        
//     }
    
// }
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// class User {
//     constructor({name, age, followers}){
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name}` is ${this.age} years ago and have ${this.followers} followers);
        
//     }  
// }
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo(); // User Poly is 3 years old and has 17 followers

const scientist = [
    {
      first: "Albert",
      last: "Einstein",
      year: 1879,
      passed: 1955
    },
    {
      first: "Isaac",
      last: "Newton",
      year: 1643,
      passed: 1727
    },
    {
      first: "Galileo",
      last: "Galilei",
      year: 1564,
      passed: 1642
    },
    {
      first: "Marie",
      last: "Curie",
      year: 1867,
      passed: 1934
    },
    {
      first: "Johannes",
      last: "Kepler",
      year: 1571,
      passed: 1630
    },
    {
      first: "Nicolaus",
      last: "Copernicus",
      year: 1473,
      passed: 1543
    },
    {
      first: "Max",
      last: "Planck",
      year: 1858,
      passed: 1947
    },
    {
      first: "Katherine",
      last: "Blodgett",
      year: 1898,
      passed: 1979
    },
    {
      first: "Ada",
      last: "Lovelace",
      year: 1815,
      passed: 1852
    },
    {
      first: "Sarah E.",
      last: "Goode",
      year: 1855,
      passed: 1905
    },
    {
      first: "Lise",
      last: "Meitner",
      year: 1878,
      passed: 1968
    },
    {
      first: "Hanna",
      last: "Hammarström",
      year: 1829,
      passed: 1909
    }
  ];
  // 1) отримати масив вчених що народилися в 19 ст
  // 2) знайти суму років скільки прожили всі вченні
  // 3) Відсортувати вчених по алфавіту
  // 4) Відсортувати вчених по даті народження
  // 5) Відсортувати вчених по кількості прожитих років
  // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
  // 7) Знайти вченого який народився найпізніше.
  // 8) Знайти рік народження Albert Einstein
  // 9) Знайти вчених прізвище яких починається на літеру С
  // 10) Видалити з масива всіх вчених імя яких починається на A

// const fitstTask = scientist.filter(el=> el.year > 1801 && el.year<1900)
// console.log(fitstTask);



// const second = scientist.reduce((acc,el)=> acc+= (el.passed -el.year),0)
// console.log(second);



// const alpha = scientist.sort((lastOne, nextOne) => {
   
//     return lastOne.first > nextOne.first ? 1 : -1;
//   });
//   console.log(alpha);




// const alpha = scientist.sort((lastOne, nextOne) => {
   
//     return lastOne.year > nextOne.year ? 1 : -1;
//     });
// console.log(alpha);



// const lived = scientist.sort((a, b) => {
//     const lastOne = a.passed -a.year
//     const nextOne = b.passed -b.year
   
//     return lastOne > nextOne ? 1 : -1;});
//   console.log(lived);



