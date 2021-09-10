import React from 'react'
import PropTypes from 'prop-types'

const Expense = ({expense, deleteExpense}) => {
    return (
        <>
        <li className="gastos">
            <p>
            {expense.name}
                <span className="gasto">€ {expense.cost}</span>
                
            </p>
            
        </li>
       
        </>
    )
}

Expense.propTypes = {
    expense : PropTypes.object.isRequired
}

export default Expense