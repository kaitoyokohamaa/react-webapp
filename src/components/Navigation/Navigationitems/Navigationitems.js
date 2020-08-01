import React from "react";
import classes from "./Navigationitems.module.css";
import NavigationItem from "./Navigationitem/Navigationitem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      ハンバーガー
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">注文</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">認証</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
