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
      <div style={{textAlign:"center"}}>
    
    you have {this.props.items.length} goals to acheive.
    {this.props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item}
         getClickedGoal={this.props.getClickedGoal}
         deleteGoal={this.props.deleteGoal}
         getGoals= {this.props.getGoals}
         />
      </div>
    ))}
  </div>
    )
  }
}





