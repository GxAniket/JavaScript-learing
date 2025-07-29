//question 2 = lets pratice with for of loop

// Initial item prices
let items = [250, 645, 300, 900, 50];

// Display original prices with index
console.log("Original Prices:");
items.forEach((price, index) => {
    console.log(`Value at index ${index} is ₹${price}`);
});

// Apply 10% discount on each item
items = items.map(price => {
    let discount = price * 0.10;
    return +(price - discount).toFixed(2); // Rounded to 2 decimal places
});

// Display discounted prices
console.log("\nPrices after 10% discount:");
items.forEach((price, index) => {
    console.log(`Discounted price at index ${index} is ₹${price}`);
});


// EASY version for Learning 

// let items = [250, 645, 300, 900, 50];

// console.log("Original prices:");
// let i = 0;
// for (let val of items) {
//     console.log(`Value at index ${i} = ₹${val}`);
//     i++;
// }

// i = 0; // Reset index for the next loop
// console.log("\nAfter applying 10% discount:");
// for (let val of items) {
//     let offer = val / 10; // Corrected variable name
//     items[i] = +(val - offer).toFixed(2); // Discounted price rounded to 2 decimals
//     console.log(`Value at index ${i} after discount = ₹${items[i]}`);
//     i++;
// }