import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {//компонента
  //отступ
  const saveExpenseDataHandler = (enteredExpenseData) => {//создали функцию чтобы потом её передать
    const expenseData = {
      ...enteredExpenseData, //добавили остальные данные/значения
      id: Math.random().toString(), //добавляем айдишник
    };
    props.onAddExpense(expenseData);
  };
  //onSaveExpenseData - пропс, через который мы передаём функцию, встречается в ExpenseForm
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
