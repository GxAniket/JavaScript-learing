let obj = {
    item: "pen",
    price1: 10,
    item2: "book",
    price2: 20,
};

let totalPrice = obj.price1 + obj.price2;
let output = `The cost of ${obj.item} is ${obj.price1} rupees and ${obj.item2} is ${obj.price2} rupees. Total is ${totalPrice} rupees.`;

console.log(output);
