// Task 1 Product Price Management Scenario

let prices = [10, 20, 15, 30, 40]; // Created an Array for product prices
prices.push(25); // Added a new price to the array
prices.shift(); // Removed first price from the array

console.log("Updated Price List:", prices); // Log the updated price list in the console

// Task 2 Modifying Customer Orders

let orders = [200, 400, 600, 800, 1000]; // Created an array for order quantities 
orders[2] +=5; // Increased third order by 5
let totalOrders = orders.reduce((total, orders) => total + orders); // Calculate total number of all orders

console.log("Updated Orders List:", orders); // Log updated orders list to console
console.log("Total Order Amount:", totalOrders); // Log the total number of all orders to console
