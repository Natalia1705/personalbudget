import { numberFormat } from "../../utils";

export const BudgetCards = ({ name, amount, max }) => {
  return (
    <div className="budgetCards">
      <div className="title">{name}</div>
      <div className="budget">
        {`${numberFormat.format(amount)} / ${numberFormat.format(max)}`}
      </div>
    </div>
  );
};
