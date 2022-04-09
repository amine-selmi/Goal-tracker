import React, { Component } from "react";
import $ from 'jquery'

// import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.handleSaveBtn=this.handleSaveBtn.bind(this)
  }
  onChangeTitle(e){
    this.setState({
      term:e.target.value
    })
  }

  handleSaveBtn() {
    $.post("/api/items/add", {
      title: this.state.term,
    }).then((data) => {
        this.setState({
            term:''
        })
      console.log(data, "from post");
    });
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <span style={{fontFamily: "Arial",textAlign: "center"}}>Set up your goal</span><br/>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onChangeTitle}
          style={{
            borderRadius:"5px"
          }}
        ></input><br/>
        <button onClick={()=>{
          this.handleSaveBtn()
          this.props.getGoals()
          this.props.changeView("list goals")
          
          }}>Save</button>
      </div>
    );
  }
}
