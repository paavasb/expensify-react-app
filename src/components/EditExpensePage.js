import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onClick = (expense) => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button 
                onClick={this.onClick}
                >
                    Remove
                </button>
            </div>
        );
    }
};

const mapDispatchtoProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id,expense)),
    removeExpense: ({ id }) => dispatch(removeExpense({ id }))
});

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage);