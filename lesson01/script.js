let money = 58000,
    income = 5000,
    addExpenses = 'счета по квартире, обучение, пицца',
    deposit = true,
    mission = 50000,
    period = 6;

console.log(money);
console.log(income);
console.log(deposit);
console.log(income.toString().length);
console.log(`Период ${period} месяцев. Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;

console.log(`Дневной бюджет: ${budgetDay.toFixed()}. Остаток: ${money % 30}`);
