import React, { Component } from "react";

export default class MyGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: this.props.goal,
    };
  }

  componentDidMount() {
      
  }

  render() {
    return (
      <div>
        <span>{this.props.goal.title}</span>
        {this.props.goal.tasks.map((task,index)=>{
        return <div key = {index}></div>
        })}
      </div>
    );
  }
}
