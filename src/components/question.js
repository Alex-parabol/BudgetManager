import React, { Fragment, useState } from 'react'
import Error from './Error'


const Question = ({setRemaining, setBudget, setShowquestion}) =>{
    // we create the state
    const [ammount, setAmmount] = useState(0)

    const [error, setError] = useState(false) 

    //Function that reads the budget
    const getBudget = e => {
        setAmmount(parseInt(e.target.value))
    }

    //We submit the budget

    const submitBudget = e => {
        e.preventDefault();

        //validations
        if(ammount < 1|| isNaN(ammount)){
            setError(true)
            return;
        } else {
            setError(false)
        }
        //once the validations are okay...
        setBudget(ammount)
        setRemaining(ammount)
        setShowquestion(false)
    }
    return (
        <Fragment>
            <h2>What is your budget?</h2>
            {
            error ? <Error text="Invalid Ammount"/> : null
            }

            <form
                onSubmit={submitBudget}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Place your budget here"
                onChange={getBudget}
                />

                <input
                type="submit"
                className="button-primary u-full-width"
                value="Set Budget" //definir presupuesto
                />
            </form>
        </Fragment>
    )
}

export default Question