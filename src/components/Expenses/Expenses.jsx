import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const data = props.data ? props.data : [];
    const [selectedYear, setSelectedYear] = useState('2022');

    const yearSelectionHandler = year => {
        setSelectedYear(year);
    };

    const filteredExpenses = data.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={selectedYear} onYearChange={yearSelectionHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

Expenses.propTypes = {
    data: PropTypes.array
};

export default Expenses;