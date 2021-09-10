import React, { Fragment } from 'react'
import { reviewBudget } from './helpers'

const BudgetControl = ({budget, remaining}) => {



    return (
        <Fragment>

            <div className="alert alert-primary">
                Budget: {budget} €
            </div>
            <div className={reviewBudget(budget, remaining)}>
                Left: {remaining} €
            </div>


        </Fragment>
    );
}

export default BudgetControl