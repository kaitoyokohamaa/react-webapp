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
      お会計: <strong>{props.price}円</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
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
