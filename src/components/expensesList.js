import React from 'react'
import Expense from './Expense'
import PropTypes from 'prop-types'

const ExpensesList = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>List of Expenses</h2>
            {expenses.map(expense =>(
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
   
        

    )
}

ExpensesList.propTypes = {
    gastos : PropTypes.array.isRequired
}

export default ExpensesList 