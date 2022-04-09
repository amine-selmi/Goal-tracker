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
        this.props.getItems();
        this.setState({
            term:''
        })
      console.log(data, "from post");
    });
  }

  render() {
    return (
      <div>
        <span>set up your goal</span>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onChangeTitle}
        ></input>
        <button onClick={this.handleSaveBtn}>Save</button>
      </div>
    );
  }
}
