import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render correctly for one item', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for zero items', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for multiple items', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});