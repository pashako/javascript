"use strict";

// const printMessage = function(message){
//     console.log(message);
    
// };

// const hof = function(callback){
//     const string = "HOCs are awesome";
//     callback(string);
// };

// hof(printMessage);

// const repeatlog  = function(n){
//     for (let i = 0; i<n; i++){
//         console.log(i);        
//     }
// }

// repeatlog(7)

// const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  
//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas
  
//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithAmount); // массив с объектами apples и grapes

// const createCounter = function() {
//     // Локальная переменная privateCounter, доступна только в замыкании
//     let privateCounter = 0;
  
//     const increment = function() {
//       privateCounter += 1;
//       console.log(privateCounter);
//     };
  
//     return increment;
//   };
  
//   const counterA = createCounter();
//   counterA(); // 1
//   counterA(); // 2
//   counterA(); // 3
  
//   const counterB = createCounter();
//   counterB(); // 1
//   counterB(); // 2
//   counterB(); // 3
//   counterB(); // 4

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//     name: 'Petya',
//     showName() {
//       console.log(this.name);
//     },
//   };
  
//   petya.showName();

//   const fn = function(){
//       console.log(this);
      
//   }

//   fn();

// const petya = {
//     name: 'Petya',
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.name);
//     },
//   };
  
//   petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'


// function showThis() {
//     console.log('this in showThis: ', this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis();
//   // this in showThis: Window
  
//   const user = { name: 'Mango' };
  
//   /*
//    * Записываем ссылку на функцию в свойство объекта
//    * Обратите внимание, что это не вызов - нет ()
//    */
//   user.showContext = showThis;
  
//   /*
//    * Вызываем функцию в контексте объекта
//    * this будет указывать на текущий объект, в контексте
//    * которого осуществляется вызов, а не на глобальный объект.
//    */
  
//   user.showContext();
//   // this in showThis: {name: "Mango", showContext: ƒ}


// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       discount = value;
//     },
//     showOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost;
//       orders.push(order);
//     },
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
  
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
  
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };
  
//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };
  
//   invokeInventoryAction('Medkit', inventory.add);
//   // Invoking action on Medkit
//   // Adding Medkit to inventory
  
//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
//   invokeInventoryAction('Gas mask', inventory.remove);
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory
  
//   console.log(inventory.items); // ['Knife', 'Medkit']

