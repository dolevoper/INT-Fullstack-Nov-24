const expensesStorageKey = "expenses";
const incomesStorageKey = "incomes";
// let expenses : Expense[] = JSON.parse(localStorage.getItem(expensesStorageKey)) ?? [];
let expenses = JSON.parse(localStorage.getItem(expensesStorageKey) ?? "[]")
    .map((exp) => ({ ...exp, date: new Date(exp.date) }));
let incomes = JSON.parse(localStorage.getItem(incomesStorageKey) ?? "[]")
    .map((exp) => ({ ...exp, date: new Date(exp.date) }));
export function expensesByCategories(month) {
    let expensesByCategories = [];
    //this month expences:
    const thisMonthExpences = expenses.filter(expense => expense.date.getMonth() === month);
    for (const expense of thisMonthExpences) {
        const local = expensesByCategories.find(record => record.category === expense.category);
        if (local) {
            local.sum += expense.sum;
        }
        else {
            const newCategory = { category: expense.category, sum: expense.sum };
            expensesByCategories.push(newCategory);
        }
    }
    return expensesByCategories.sort((a, b) => b.sum - a.sum);
}
export function getIncome(month) {
    return incomes.filter(income => income.date.getMonth() === month);
}
export function addExpense(expense) {
    expenses.push(expense);
    localStorage.setItem(expensesStorageKey, JSON.stringify(expenses));
    console.log("expence added");
}
export function addIncome(income) {
    incomes.push(income);
    localStorage.setItem(incomesStorageKey, JSON.stringify(incomes));
    console.log("income added");
}
