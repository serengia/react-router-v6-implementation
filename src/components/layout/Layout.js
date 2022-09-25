import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import s from "./Layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={s.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
