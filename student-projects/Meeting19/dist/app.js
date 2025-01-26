var _a;
//creating a groceries object - product, amount, cost an calculation total cost of the product
var groceriesAmount = Number(prompt("Please enter the amount of proceries you have: "));
var groceries = [];
for (var i = 0; i < groceriesAmount; i++) {
    var product = (_a = prompt("Please enter the grocery you chose:")) !== null && _a !== void 0 ? _a : "";
    var amount = Number(prompt("Please enetr the amount of " + product + " you take: "));
    var cost = Number(prompt("Please enter the cost of " + product + ":"));
    var totalCost = cost * amount;
    groceries.push({
        product: product,
        amount: amount,
        cost: cost,
        totalCost: totalCost
    });
}
//Calculating the total price of the groceris
var totalPrice = 0;
for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
    var grocery = groceries_1[_i];
    totalPrice += grocery.totalCost;
}
alert("The total price of you groceries is: " + totalPrice + ".");
//alerting the most expensive product and how much it cost
var expensiveCost = 0;
var expensiveProduct = "";
for (var _b = 0, groceries_2 = groceries; _b < groceries_2.length; _b++) {
    var grocery = groceries_2[_b];
    if (grocery.cost > expensiveCost) {
        expensiveCost = grocery.cost;
        expensiveProduct = grocery.product;
    }
}
alert("The most expensive product is " + expensiveProduct + " , which cost " + expensiveCost + ".");
//watch the groceries list
groceries.forEach(function (grocery) {
    console.log("Product: " + grocery.product + ", Amount " + grocery.amount + ", Cost: " + grocery.cost + ", Total Cost: " + grocery.totalCost);
});
