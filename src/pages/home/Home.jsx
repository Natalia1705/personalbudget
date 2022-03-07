import { BudgetCards } from "../../components/cards/BudgetCards";

export const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <div className="title">Budget</div>
        <button className="addButton">Add Budget</button>
        <button className="addExpense">Add Expense</button>
      </div>
      <div className="Cards">
        <BudgetCards name="Entertainment" amount={200} max={1000} />
      </div>
    </div>
  );
};
