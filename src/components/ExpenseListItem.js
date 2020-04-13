import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Expense: {description}</h3>
        </Link>
        <p>Cost: {amount}</p>
        <p>Created At: {createdAt}</p>
    </div>
);

export default ExpenseListItem;