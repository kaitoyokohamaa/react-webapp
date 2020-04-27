import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "サラダ", type: "salad" },
  { label: "ベーコン", type: "bacon" },
  { label: "チーズ", type: "cheese" },
  { label: "10:1パティ", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      お会計の値段: <strong>{props.price}円</strong>
    </p>
    {controls.map(w => (
      <BuildControl
        key={w.label}
        label={w.label}
        added={() => props.ingredientAdded(w.type)}
        removed={() => props.ingredientRemove(w.type)}
        disabled={props.disabled[w.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.orderd}
    >
      注文！
    </button>
  </div>
);

export default buildControls;
