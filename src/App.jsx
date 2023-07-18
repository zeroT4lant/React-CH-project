import "./App.css";
import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/ExpenseItems/NewExpense/NewExpense";

const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expense);
};

function App() {
  return (
    <div className="App">
      Lets start!
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems />
    </div>
  ); //ПОДСКАЗКА в ExpenseItems в гайде так items={expenses}
}

export default App;
