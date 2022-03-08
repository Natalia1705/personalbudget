import { numberFormat } from "../../utils";
import "./budgetCard.css";

export const BudgetCards = ({ name, amount, max, icon }) => {
  return (
    <div className={amount >= max ? "budgetCardsDanger" : "budgetCards"}>
      <div className="title">
        {name}
        <div className="icon"> {icon}</div>
        <div className="budget">
          {`${numberFormat.format(amount)} / ${numberFormat.format(max)}`}
        </div>
      </div>
      <div class="progressBar">
        <p className="progressLabel">{`${(amount / max) * 100}%`}</p>
        <progress min={0} max={max / max} value={amount / max} />
      </div>
      {/* <div className="buttons">
        <button>Add New</button>
      </div> */}
    </div>
  );
};
