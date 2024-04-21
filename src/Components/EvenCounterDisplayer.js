// import React, { Component } from "react";

// class EvenCounterDisplayer extends Component {
//   render() {
//     let message = "Clicked 0 times";
//     if (this.props.clicks % 2 === 0) {
//       message = `Clicked ${this.props.clicks} times`;
//     }
//     return (
//       <div>
//         <div>{message}</div>
//       </div>
//     );
//   }
// }

// export default EvenCounterDisplayer;

import React from "react";
import "./evencounter.css";

const EvenCounterDisplayer = ({ evenClicksCounter }) => {
  return (
    <div>
      <p className="box">Clicked {evenClicksCounter} times evenly</p>
    </div>
  );
};

export default EvenCounterDisplayer;
//This file will contain the EvenCounterDisplayer component which will be responsible for displaying the number of even clicks.