import React from "react";
import classes from "./Navigationitems.module.css";
import NavigationItem from "./Navigationitem/Navigationitem";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      ハンバーガー
    </NavigationItem>
    <NavigationItem link="/orders">注文</NavigationItem>
    <NavigationItem link="/auth">認証</NavigationItem>
  </ul>
);

export default navigationItems;
