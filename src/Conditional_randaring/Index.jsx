import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";

export default class Conditional_randaring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  

  render() {
    const { isLoggedIn } = this.state;
    // If else

    // if (isLoggedIn) {
    //   return <Home />;
    // } else {
    //   return <Login />;
    // }

    //ternary operator


    // return (
    //     <div>{isLoggedIn? <Home/> : <Login/>}</div>
    // )

    //variable


    // let variable ;
    // if(isLoggedIn){
    //     variable=<Home/>
    // }
    // else{
    //     variable=<Login/>
    // }

    // return (
    //     <div>{variable}</div>
    // )

    //short circuit
    
    return (
        <div>{isLoggedIn && <Home/>}</div>
    )

  }
}
