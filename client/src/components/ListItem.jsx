import React from "react";
// import img from '../../src/images/goal-setting.jpg';

const ListItem = (props) => (
  <div>
    <div className="card">
      <img
        src="https://miro.medium.com/max/900/1*eywP5BUnq8xB_Q7Gtz1v1g.jpeg"
        alt="Avatar"
      />
      <div className="container">
        <h4>
          <b>title: {props.item.title}</b>
        </h4>
        <p> progress: {props.item.progress}</p>
      </div>
    </div>

    {console.log(props, "props list item")}
  </div>
);

export default ListItem;
