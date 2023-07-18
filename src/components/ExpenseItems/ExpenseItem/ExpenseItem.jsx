import React, { useState } from "react";

import "./ExpenseItem.css";
import Date from "../../Date.jsx";

const ExpenseItem = (props) => {
  //в пропсах указываем то, что должно быть на сайте, передаваемые значения
  //в них мы забиваем место, точнее что должно быть там

  const [state,setState] = useState(props.title) //берём значением из props.title и работаем с ним
  //хук возвращает значение state и функцию setState

  const clickHandler = () => {
    setState("updated!"); //было props.title -> вызвали фукнцию setState и стало updated!
    console.log(state); //Выводим изначальное значение state
  };

  return (
    <div className="expense-item">
      <div>
        <Date date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{state}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
