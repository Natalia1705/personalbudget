import { numberFormat } from "../../utils";
import "./budgetCard.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const BudgetCards = ({ name, amount, max }) => {
  return (
    <div className={amount >= max ? "budgetCardsDanger" : "budgetCards"}>
      <div className="title">
        {name}
        <SportsEsportsIcon style={{ marginLeft: "15px", fontSize: "45px" }} />
      </div>
      <div className="budget">
        {`${numberFormat.format(amount)} / ${numberFormat.format(max)}`}
      </div>

      <div class="progressBar">
        <progress min={0} max={max / max} value={amount / max} />
        <p className="progressLabel">{`${(amount / max) * 100}%`}</p>
      </div>
      <div className="buttons">
        <button>Add Budget</button>
        <button>Add Expensive</button>
      </div>
    </div>
  );
};
