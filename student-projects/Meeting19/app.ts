type Groceries = {
    product: string,
    amount: number,
    cost: number,
    totalCost: number,
};

//creating a groceries object - product, amount, cost an calculation total cost of the product

const groceriesAmount = Number(prompt("Please enter the amount of proceries you have: "));

const groceries: Groceries[] = [];

for (let i = 0; i < groceriesAmount; i++) {
    const product = prompt("Please enter the grocery you chose:") ?? "";
    const amount = Number(prompt("Please enetr the amount of " + product + " you take: "));
    const cost = Number(prompt("Please enter the cost of " + product + ":"));
    const totalCost = cost * amount;

    groceries.push({
        product,
        amount,
        cost,
        totalCost
    });
}

//Calculating the total price of the groceris
let totalPrice = 0;

for (const grocery of groceries) {
    totalPrice += grocery.totalCost;
}

alert("The total price of you groceries is: " + totalPrice + ".");

//alerting the most expensive product and how much it cost

let expensiveCost = 0;
let expensiveProduct = "";

for (const grocery of groceries) {
    if (grocery.cost > expensiveCost) {
        expensiveCost = grocery.cost;
        expensiveProduct = grocery.product;
    }
}
alert("The most expensive product is " + expensiveProduct + " , which cost " + expensiveCost + ".");

//watch the groceries list
groceries.forEach((grocery) => {
    console.log(`Product: ${grocery.product}, Amount ${grocery.amount}, Cost: ${grocery.cost}, Total Cost: ${grocery.totalCost}`);
});