import React from "react";
import ListItem from "./ListItem.jsx";


const List = (props) => (
  <div>
    
    you have {props.items.length} goals to acheive.
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} getClickedGoal={props.getClickedGoal} />
      </div>
    ))}
  </div>
);

export default List;
