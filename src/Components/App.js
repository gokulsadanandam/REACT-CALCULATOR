import React, { Component } from 'react';
import './App.css';
import Box from './Box/Box'

class App extends Component {

  constructor(props){
    super(props)
    // this.number = this.number.bind(this)
    this.state = {
        operations : []
      }
      console.log(this)
      this.test = this.test.bind(this)
  }

   test(data){
      console.log(data)
      let array = this.state.operations
      console.log(array)
          array.push(data)
      this.setState({
        operations : array
      })
      console.log(this.state)
    }


  render() {


    const style = {
      padding : "10px",
      textAlign : "center",
      margin : "150px 0px auto 0px"
    }
    return (
      <div  style= { style }>
        <div className="row1" >
         <Box type={"result"} clickHandle = { this.test } size={"30px"} cols={4.17} rows={4} color={"white"} textcolor = {"black"} align={"right"} />
         </div>
         <div className="row2">
         <Box data={"clear"} clickHandle = { this.test } size={"30px"} cols={3.11} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"/"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         </div>
          <div className="row3">
         <Box data={"7"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"8"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"9"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"-"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         </div>
          <div className="row3">
         <Box data={"4"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"5"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"6"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         <Box data={"+"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"} operations= { this.state }/>
         </div>
          <div className="row4">
         <Box data={"1"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"2"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"3"} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"="} clickHandle = { this.test } size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"}/>
         </div>
      </div>
    );
  }
}

export default App;
