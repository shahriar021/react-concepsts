import React, { Component } from "react";

export default class EVENT_HANDLER extends Component {
  onClick = () => {
    console.log("clicked!!!!!!!!");
  };

  onChange=(e)=>{
   
    

    this.setState({
        changedValue:e.target.value
        
    },()=>{
        console.log(e.target.value);
    })
  }

  constructor(props) {
    super(props)
  
    this.state = {
       changedValue: ''
    }
  }
  

  render() {
    const {changedValue}=this.state
    return (
      <div>
        <button onClick={this.onClick}>click me</button>
        <input type="text" onChange={this.onChange}/>
        <p>{changedValue}</p>
      </div>
    );
  }
}
