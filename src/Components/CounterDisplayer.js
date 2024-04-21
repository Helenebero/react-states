import React from "react";
import "./counterdisplayer.css";

const CounterDisplayer = (props) => {
  return (
    <div className="box">You have clicked the button {props.clicks} times.</div>
  );
};

export default CounterDisplayer;




//The "CounterDisplayer.js" component is a functional component that receives the "clicks" state as a prop from the "MyCounter.js" component and displays the number of times the button has been clicked.