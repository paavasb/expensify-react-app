import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render correctly for one item', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for zero items', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for multiple items', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});