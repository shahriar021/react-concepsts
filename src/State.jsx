import React, { Component } from 'react'

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  plus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const {count}=this.state
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus} disabled={count===0?true:false}>-</button>
      </div>
    );
  }
}
