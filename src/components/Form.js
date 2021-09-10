import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

const Form = ({setExpense,setCreatedExpense}) => {
    const [name, setName ] = useState('')
    const [ cost, setCost ] = useState(0)
    const [error, setError ] = useState(false)
    

    const submitExpense = e => {
        e.preventDefault()

        //validation
        if(cost < 1|| isNaN(cost) || name.trim() === ''){
            setError(true)
            return;
        } else {
            setError(false)
        }
        //we build up the expense as an object
        const purchase = {
            name : name,
            cost : cost,
            id : shortid.generate()
        }
        
         //we move the expense information to the main component
        setExpense(purchase)
        setCreatedExpense(true)
       
       
        //reset the form
        setName('');
        setCost(0)

    }
    
    return(
        <form
            onSubmit={submitExpense}
        >
            <h2>Add your expenses</h2>
            {error ?
            <Error text='Both fields are required or Incorrect Cost'/> 
            : null}
            <div className="campo">
                <label>Name of the expense</label>
                <input
                 type="text" 
                 className="u-full-width"
                 placeholder="Ex. Groceries"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 />
            </div>
            <h2>Cost</h2>
            <div className="campo">
                <label>Cost</label>
                <input
                 type="number" 
                 className="u-full-width"
                 placeholder="Ex.300"
                 value={cost}
                 onChange={e => setCost(parseInt(e.target.value , 10)) }
                 />
            </div>
            <button //vigila si funciona sin ser input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            
            >
                Add Expense
            </button>
        </form>
    )
}

export default Form