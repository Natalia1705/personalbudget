import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PetsIcon from "@mui/icons-material/Pets";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { BudgetCards } from "../card/BudgetCards";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React from "react";
import "./cards.css";

export const Cards = () => {
  return (
    <div className="home">
      <div className="cardTitle">Expenses</div>
      <div className="cards">
        <BudgetCards
          name="Entertainment"
          amount={90}
          max={100}
          icon={<SportsFootballIcon />}
        />
        <BudgetCards
          name="Car paymentst"
          amount={90}
          max={100}
          icon={<AirportShuttleIcon />}
        />
        <BudgetCards
          name="Groceries"
          amount={90}
          max={100}
          icon={<LocalGroceryStoreIcon />}
        />
        <BudgetCards
          name="Personal care"
          amount={90}
          max={100}
          icon={<SelfImprovementIcon />}
        />
        <BudgetCards
          name="Child care"
          amount={90}
          max={100}
          icon={<ChildCareIcon />}
        />
        <BudgetCards
          name="Pet Care"
          amount={90}
          max={100}
          icon={<PetsIcon />}
        />
      </div>
      <div className="cardTitle">Incomes</div>
      <div className="incomeCards">
        <BudgetCards
          name="Salary"
          amount={90}
          max={100}
          icon={<MonetizationOnIcon />}
        />
        <BudgetCards
          name="Interest"
          amount={90}
          max={100}
          icon={<AccountBalanceIcon />}
        />
        <BudgetCards
          name="Others"
          amount={90}
          max={100}
          icon={<AttachMoneyIcon />}
        />
      </div>
    </div>
  );
};
