import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }
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
        <p>あなたの材料は以下の通りよ</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>会計の値段:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>会計しますか？</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          キャンセル
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          続ける
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
