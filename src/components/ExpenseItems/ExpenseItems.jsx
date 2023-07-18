import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpenceItems.css";

const ExpenseItems = (props) => {
  const expenses = [
    { id: "e1", title: "Niggabals", amount: 94.13, date: new Date(2021, 2, 3) },
    { id: "e2", title: "Freddy", amount: 1123, date: new Date(2021, 2, 3) },
    { id: "e3", title: "Bonny", amount: 92233, date: new Date(2021, 2, 3) },
    { id: "e4", title: "Chicka", amount: 9312.33, date: new Date(2021, 2, 3) },
  ]; //массив данных

  let expensesElements = expenses.map((item) => (
    <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
  ));

  return <div className="ExpenceItems">{expensesElements}</div>;
  //вставляем массив массивов
};

export default ExpenseItems;
