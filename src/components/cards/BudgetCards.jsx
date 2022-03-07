import { numberFormat } from "../../utils";
import "./budgetCard.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const BudgetCards = ({ name, amount, max }) => {
  return (
    <div className="budgetCards">
      <div className="title">
        {name}
        <SportsEsportsIcon style={{ marginLeft: "15px", fontSize: "45px" }} />
      </div>
      <div className="budget">
        {`${numberFormat.format(amount)} / ${numberFormat.format(max)}`}
      </div>

      <div class="progressBar">
        <div className="progress">
          <div className="progressLabel">25%</div>
        </div>
      </div>
    </div>
  );
};
