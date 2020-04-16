import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.expenses.length === 1 ? 
            <p>Viewing 1 expense totalling {numeral(props.expenses[0].amount/100).format('$0,0.00')}</p> :
            <p>Viewing {props.expenses.length} expenses totalling {numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);