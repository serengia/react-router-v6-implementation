import React from "react";
import { NavLink } from "react-router-dom";
import s from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <nav className={s.nav}>
        <ul>
          <li>
            {" "}
            <NavLink
              to={"/quotes"}
              className={(ele) => (ele.isActive ? s.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to={"/quotes/new"}
              className={(ele) => (ele.isActive ? s.active : "")}
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
