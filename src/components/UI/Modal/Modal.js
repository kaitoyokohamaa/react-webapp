import React, { Component } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] willUpdate");
  }

  render() {
    return (
      <Aux>
        {/* //pinkの背景にする */}
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          // ここは注文を押したらturueになってモーダルを表示する実装
          style={{
            transform: this.props.show
              ? "translateY(0)"
              : "translateY(-1000vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {/* ここでいうprops.childrenは <OrderSummary ingredients={this.state.ingredients} /> */}
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
