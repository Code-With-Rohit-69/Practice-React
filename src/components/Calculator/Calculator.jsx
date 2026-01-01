import React from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator-container">
      <h1 className="title">Simple Calculator</h1>
      <input className="display" readOnly />

      <div className="button-grid">
        <button className="clear-btn">
          <span className="icon-clear">Del</span>
        </button>
        <button>
          <span className="icon-sqrt">sqrt</span>
        </button>
        <button>
          <span className="icon-percent">%</span>
        </button>
        <button>
          <span className="icon-divide">/</span>
        </button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>
          <span className="icon-multiply">X</span>
        </button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>
          <span className="icon-minus">-</span>
        </button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          <span className="icon-plus">+</span>
        </button>

        <button>0</button>
        <button>.</button>
        <button>(</button>
        <button>)</button>

        <button className="back-btn">
          <span className="icon-backspace">x</span>
        </button>
        <button className="equal-btn">
          <span className="icon-equal">=</span>
        </button>
      </div>
    </div>
  );
}

export default Calculator;
