import React, { Component } from 'react';
import './App.css';
import Box from './Box/Box'

class App extends Component {
  render() {

    const style = {
      padding : "10px"
    }
    return (
      <div  style= { style }>
        <div className="row1" >
         <Box data={"0"} size={"30px"} cols={4.17} rows={4} color={"white"} textcolor = {"black"} align={"right"} />
         </div>
         <div className="row2">
         <Box data={"clear"} size={"30px"} cols={3.11} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"/"} size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"}/>
         </div>
          <div className="row3">
         <Box data={"7"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"8"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"9"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"-"} size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"}/>
         </div>
          <div className="row3">
         <Box data={"4"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"5"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"6"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"+"} size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"}/>
         </div>
          <div className="row4">
         <Box data={"1"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"2"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"3"} size={"30px"} cols={1} rows={4} color={"white"} textcolor = {"black"} align={"center"}/>
         <Box data={"="} size={"30px"} cols={1} rows={4} color={"#F2274F"} textcolor = {"black"} align={"center"}/>
         </div>
      </div>
    );
  }
}

export default App;
