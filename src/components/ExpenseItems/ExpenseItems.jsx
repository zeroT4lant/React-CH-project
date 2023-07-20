import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpenseItems.css";
import ExpenseFilter from "./ExpenseFilters/ExpenseFilter";
import { useState } from "react";

const ExpenseItems = (props) => {
  //принимаем от ребёнка к родителю выбранные пропсы

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenses = [
    { id: "e1", title: "Niggabals", amount: 94.13, date: new Date(2021, 2, 3) },
    { id: "e2", title: "Freddy", amount: 1123, date: new Date(2021, 2, 3) },
    { id: "e3", title: "Bonny", amount: 92233, date: new Date(2021, 2, 3) },
    { id: "e4", title: "Chicka", amount: 9312.33, date: new Date(2021, 2, 3) },
  ]; //массив данных

  let expensesElements = expenses.map((item) => (
    <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
  ));

  return (
    <div>
      <div className="ExpenceItems">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesElements}
      </div>
    </div>
    //onChangeFilter={filterChangeHandler}-помогает получить данные этому файлу от ребёнка
  );
  //вставляем массив массивов
};

export default ExpenseItems;
