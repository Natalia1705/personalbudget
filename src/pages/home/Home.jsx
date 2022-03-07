import { BudgetCards } from "../../components/cards/BudgetCards";
import "./home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <div className="title">Budget</div>
        <button className="addButton">Add Budget</button>
        <button className="addExpense">Add Expense</button>
      </div>
      <div className="Cards">
        <BudgetCards name="Entertrainment" amount={200} max={1000} />
        <div class="progressBar">
          <div
            className="progress"
            style={{
              width: "25%",
              backgroundColor: "rgba(102, 16, 83, 0.698)",
            }}
          >
            25%
          </div>
        </div>
      </div>
    </div>
  );
};
