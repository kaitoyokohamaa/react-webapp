import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>あなたのオーダー</h3>

        <ul>{ingredientSummary}</ul>
        <p>
          <strong>会計の値段:{this.props.price}円</strong>
        </p>
        <p>会計しますか？</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          戻る
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          続ける
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
