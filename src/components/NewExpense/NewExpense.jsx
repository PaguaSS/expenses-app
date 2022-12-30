import React, { useState } from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const onSaveNewExpenseHandler = newExpenseData => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString() 
    };
    props.onAddNewExpenseItem(expenseData);
    hideExpenseFormHandler();
  };

  const showExpenseFormHandler = () => setIsFormVisible(true);

  const hideExpenseFormHandler = () => setIsFormVisible(false);

  return (
    <div className='new-expense'>
        {!isFormVisible && <button type='button' onClick={showExpenseFormHandler}>Add New Expense</button>}
        {isFormVisible && <ExpenseForm onSaveNewExpense={onSaveNewExpenseHandler} onCancelFormSubmission={hideExpenseFormHandler}></ExpenseForm>}
    </div>
  )
};

export default NewExpense;