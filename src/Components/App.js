import React, { Component } from "react";
import "./App.css";
import Box from "./Box/Box";
import * as math from 'mathjs'
// import Display from './Display/Display'

class App extends Component {
  constructor(props) {
    super(props);
    // this.number = this.number.bind(this)
    this.state = {
      operations: [],
      data: 0
    };
    this.Calculate = this.Calculate.bind(this);
  }

  Calculate(data) {
    switch (data) {
      case "clear":
        this.setState({
          operations: [],
          data: 0
        });
        break;
      case "=":
        let result = math.eval(this.state.operations.join(''))
        this.setState({
          data : result,
          operations : [result]
        })
        break;
      default:
        let array = this.state.operations;
        array.push(data);
        let value = array.join("");
        this.setState({
          operations: array,
          data: value
        });
        break;
    }
  }

  render() {
    const style = {
      padding: "10px",
      textAlign: "center",
      margin: "150px 0px auto 0px"
    };
    return (
      <div style={style}>
        <div className="row1">{this.state.data}</div>
        <div className="row2">
          <Box
            data={"clear"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={3.11}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"/"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"#F2274F"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
        </div>
        <div className="row3">
          <Box
            data={"7"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"8"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"9"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"-"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"#F2274F"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
        </div>
        <div className="row3">
          <Box
            data={"4"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"5"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"6"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
          <Box
            data={"+"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"#F2274F"}
            textcolor={"black"}
            align={"center"}
            operations={this.state}
          />
        </div>
        <div className="row4">
          <Box
            data={"1"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
          />
          <Box
            data={"2"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
          />
          <Box
            data={"3"}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"white"}
            textcolor={"black"}
            align={"center"}
          />
          <Box
            data={"="}
            clickHandle={this.Calculate}
            size={"30px"}
            cols={1}
            rows={4}
            color={"#F2274F"}
            textcolor={"black"}
            align={"center"}
          />
        </div>
      </div>
    );
  }
}

export default App;
