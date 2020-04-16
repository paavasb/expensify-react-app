const getExpensesTotal = (expenses) => {
    const expensesList = expenses.map(({ amount }) => amount );
    return expensesList.reduce((total, amount) => (total + amount) , 0 );
};

export default getExpensesTotal;