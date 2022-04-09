import React, { Component } from "react";
import $ from 'jquery'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed:0
    };
    this.getCompleteTasks = this.getCompleteTasks.bind(this)
  }

  getCompleteTasks(){
    $.ajax({
      url: `/api/task/completed/${this.props.item._id}`,
      success: (data) => {
        console.log(data.length,'completed tasks')
        this.setState({
          completed:data.length
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount(){
    this.getCompleteTasks()
  }
  render() {
    return (
      <div>
        <div className="card" >
          <img
            src="https://miro.medium.com/max/900/1*eywP5BUnq8xB_Q7Gtz1v1g.jpeg"
            alt="Avatar"
            onClick={() => this.props.getClickedGoal(this.props.item)}
          />
          <div className="container" >
            <p> {this.props.item.title}</p>
            <p> progress: { this.props.item.tasks.length !==0 ?
            (this.state.completed * 100) / this.props.item.tasks.length : 0} %
            <button onClick={()=>{
              this.props.deleteGoal(this.props.item._id)
              this.props.getGoals()
              }}>delete</button></p>
            
          </div>
        </div>

        {console.log(this.props, "props list item")}
      </div>
    );
  }
}
