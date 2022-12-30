import React from 'react'
import PropTypes from 'prop-types'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    let month = '-';
    let day  = '-';
    let year = '-';

    if(Object.prototype.toString.call(props.date) === '[object Date]'){
        month = props.date.toLocaleString('en-US', {month: 'long'});
        day  = props.date.toLocaleString('en-US', {day: '2-digit'});
        year = props.date.getFullYear();
    }

    return (
        <div className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__year'>{year}</div>
          <div className='expense-date__day'>{day}</div>
        </div>
    )
}

ExpenseDate.propTypes = {
    date: PropTypes.instanceOf(Date)
};

export default ExpenseDate;