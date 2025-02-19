type Expense = {
    id: string;
    date: Date;
    description: string;
    category: "apparel" | "bills" | "eatingOut" | "education" | "grosceries" 
                | "misc" | "pets" | "housing" | "transportation" | "vacations";
    sum: number;
}

type Income = {
    id: string;
    source : string;
    date: Date;
    description: string;
    sum: number;     
}

const expensesStorageKey = "expenses";
const incomesStorageKey = "incomes";
// let expenses : Expense[] = JSON.parse(localStorage.getItem(expensesStorageKey)) ?? [];

let expenses: Expense[] = JSON.parse(localStorage.getItem(expensesStorageKey) ?? "[]")
    .map((exp: any) => ({ ...exp, date: new Date(exp.date) }));

let incomes: Income[] = JSON.parse(localStorage.getItem(incomesStorageKey) ?? "[]")
.map((exp: any) => ({ ...exp, date: new Date(exp.date) }));

export function expensesByCategories(month : number){

    let expensesByCategories: {category: string; sum: number}[] = [];
    //this month expences:
    const thisMonthExpences = expenses.filter(expense => expense.date.getMonth() === month);

    for (const expense of thisMonthExpences){
                
        const local = expensesByCategories.find(record => record.category === expense.category);

        if (local){
            local.sum += expense.sum;
        } else {
            const newCategory = {category: expense.category, sum: expense.sum};
            expensesByCategories.push(newCategory);
        }
               
    }

    return expensesByCategories.sort((a, b) => b.sum - a.sum);
}
 


export function getIncome(month : number){

    return incomes.filter(income => income.date.getMonth() === month);

}

export function addExpense(expense : Expense){
   
    expenses.push(expense);
    localStorage.setItem(expensesStorageKey, JSON.stringify(expenses));
    console.log("expence added");
}

export function addIncome(income : Income){
   
    incomes.push(income);
    localStorage.setItem(incomesStorageKey, JSON.stringify(incomes));
    console.log("income added");
}





