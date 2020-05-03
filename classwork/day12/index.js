"use strict";

// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };


// const body = document.body;
// console.log(body);
// let interval;

// const startHandler = function({target}){
    
//     if(target.dataset.action === "start"){
//         target.setAttribute("disabled", true);
//         const interval = setInterval(()=>{
//             body.style.background = colors[randomIntegerFromInterval(0, colors.lenght)];
//         }, 1000)
//     } else if(target.dataset.action === "stop"){
//         clearInterval(Interval);
//         body.children[0].removeAttribute("disabled");
//     }
// }
// body.addEventListener("click", startHandler);









// const delay = ms => {
//     const promise = new Promise ((res, rej) => {
//         setTimeout(() => {
//             res(ms)
//         }, ms)
//     })
//     return promise;
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms










//   const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName, callback) => {
//     const promise = new Promise((res, rej)=>{
//         const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
//     res(updatedUsers);
//     })

    
  
//     return promise;
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
// //    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);










