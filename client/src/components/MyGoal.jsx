import React, { Component } from "react";
import $ from 'jquery'

export default class MyGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: this.props.goal,
      tasks:[],
      term :''
    };
    // console.log(this.state.goal.tasks[0],'from my goal');
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.handleSaveBtn = this.handleSaveBtn.bind(this)
    this.getTasks = this.getTasks.bind(this)
  }

  getTasks(){
    $.ajax({
        url: `/api/task/${this.state.goal._id}`,
        success: (data) => {
          console.log(data)
          this.setState({
            tasks: data
          })
        },
        error: (err) => {
          console.log('err', err);
        }
      });
  }

  componentDidMount() {
   this.getTasks()
  }

  onChangeDescription(e){
    this.setState({
      term:e.target.value
    })
  }

  handleSaveBtn() {
    $.post("/api/task/add", {
      description: this.state.term,
      idGoal: this.state.goal._id
    }).then((data) => {
        this.getTasks()
        this.setState({
            term:''
        })
      console.log(data, "from post");
    });
  }


  render() {
    return (
      <div>
        <span>{this.props.goal.title}</span>
        <p>you have {this.props.goal.tasks.length} incomplete tasks </p>
        
        {/* {console.log(this.state.tasks,'tasks from state')} */}
        {this.state.tasks.map((task,index)=>{
            return (
            <div key={index}>
                <p>description : {task.description} status : {task.status+''}</p>
            </div>
            )
        })}
        <p>want to add new task ? </p>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onChangeDescription}
        ></input>
        <button onClick={this.handleSaveBtn}>Save</button>

      </div>
    );
  }
}
