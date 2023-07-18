import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(""); //изначальные значения в полях в useState(ЗДЕСЬ)
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //устанавливает введёное значение
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //устанавливает введёное значение
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //устанавливает введёное значение
  };

  const submitHandler = (event) => {
    //кнопка подтверждения/отправки

    event.preventDefault(); //отменили стандартное поведение

    const expenseData = {
      //объект с данными, куда сохраняются все подтверждённые данные
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData); //выводит объект со всеми данными
    setEnteredTitle(""); //после отправки очищает поля :)
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2026-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
