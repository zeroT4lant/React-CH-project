import "./App.css";
import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/ExpenseItems/NewExpense/NewExpense";

function App() {
  return (
    <div className="App">
      Lets start!
      <NewExpense />
      <ExpenseItems />
    </div>
  );
}

export default App;
