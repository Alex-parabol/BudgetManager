import React, {useState, useEffect} from 'react'
import Question from './components/question'
import Form from './components/Form'
import ExpensesList from './components/expensesList'
import BudgetControl from './components/BudgetControl'

function App() {

  const [budget, setBudget ] = useState(0)
  const [ remaining, setRemaining ] = useState(0)
  const [showQuestion, setShowquestion ] = useState(true)
  const [ expenses, setExpenses ] = useState([])
  const [expense, setExpense ] = useState({})
  const [ createdExpense,setCreatedExpense ] = useState(false)


  //UseEffect that actualizes the remaining

  useEffect(() => {
    if(createdExpense){

      //we add new budget
      setExpenses([
      ...expenses,
      expense
    ]);
    // gets the remaining budget

    const remainingBudget = remaining - expense.cost
    setRemaining(remainingBudget)

    //reset createdExpense to false 
    setCreatedExpense(false)
  }
    
  }, [expense,expenses, createdExpense,remaining])

  

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
          { showQuestion ? 
          
          <Question
            setBudget={setBudget}
            setRemaining={setRemaining}
            setShowquestion={setShowquestion}
          />
          
           : 
           
          <div className="row">
                      <div className="one-half column">
                        <Form
                         setExpense={setExpense}
                         setCreatedExpense={setCreatedExpense}
                         />
                          </div>
                          <div className="one-half column">
                            <ExpensesList
                            expenses={expenses}
                            />
                            <BudgetControl
                            budget={budget}
                            remaining={remaining}
                            />
                          </div>
                        </div>
           
          
        }
          
        </div>
      </header>
    </div>
  );
}

export default App;
