import React from 'react';

const ExpenseListItem = ({description, amount, createdAt }) => (
    <div>
        <h3>Expense: {description}</h3>
        <p>Cost: {amount}</p>
        <p>Created At: {createdAt}</p>
    </div>
);

export default ExpenseListItem;