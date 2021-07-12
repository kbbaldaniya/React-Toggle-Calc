import React, { Component } from "react";
import "./App.css";
import Button from "./Component/Button";
import Input from "./Component/Input";
import ClearButton from "./Component/ClearButton";
import * as math from "mathjs";
// import {Switch} from 'antd';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: false,
      toggle: false,
    };
  }

  toggleState = () => {
    this.setState({
      input: "",
      toggle: true,
    });
  };

  toggle = (val) => {
    if (this.state.toggle === false) {
      console.log("toggle off");
      this.setState({
        result: false,
        input: this.state.input + val,
      });
    } else if (this.state.toggle === true) {
      console.log("else");
      if (this.state.result === true) {
        this.setState({
          input: val,
          result: false,
          toggle: true,
        });
      } else {
        this.setState({
          input: this.state.input + val,
          result: false,
        });
      }
    }
  };
  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input),
      result: true,
    });
  };

  render() {
    return (
      <div className="App">
      {/* <Switch /> */}
        <div className="calc-wrapper">
          <div className="toggle">
            <input type="checkbox" onClick={this.toggleState} />
          </div>
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.toggle}>7</Button>
            <Button handleClick={this.toggle}>8</Button>
            <Button handleClick={this.toggle}>9</Button>
            <Button handleClick={this.toggle}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.toggle}>4</Button>
            <Button handleClick={this.toggle}>5</Button>
            <Button handleClick={this.toggle}>6</Button>
            <Button handleClick={this.toggle}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.toggle}>1</Button>
            <Button handleClick={this.toggle}>2</Button>
            <Button handleClick={this.toggle}>3</Button>
            <Button handleClick={this.toggle}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.toggle}>.</Button>
            <Button handleClick={this.toggle}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.toggle}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: " " })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
