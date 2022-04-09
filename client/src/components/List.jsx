import React, { Component } from 'react'
import ListItem from "./ListItem.jsx";


export default class List extends Component {
  constructor(props){
    super(props)
    this.state={
      completeTasks:[]
    }
  }

  

  render() {
    return (
      <div>
    
    you have {this.props.items.length} goals to acheive.
    {this.props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} getClickedGoal={this.props.getClickedGoal} />
      </div>
    ))}
  </div>
    )
  }
}





