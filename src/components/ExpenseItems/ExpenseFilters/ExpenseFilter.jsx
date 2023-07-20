import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeFilter = (event) => {
    props.onChangeFilter(event.target.value);
  }; //при помощи пропсов отправили данные в ExpenseItems
  //функция onChangeFilter помогла, была создана в ExpenseItems

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeFilter}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
