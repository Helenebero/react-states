import React, { Component } from "react";
import CounterDisplayer from "../Components/CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      evenClicksCounter: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
      evenClicksCounter:
        (prevState.clicks + 1) % 2 == 0
          ? prevState.evenClicksCounter + 2
          : prevState.evenClicksCounter,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer clicks={this.state.clicks} />
        <EvenCounterDisplayer
          evenClicksCounter={this.state.evenClicksCounter}
        />
      </div>
    );
  }
}

export default MyCounter;
//In the "MyCounter.js" component, we initialize the state with a "clicks" property set to 0. The "allClicksCounter()" function is used to increment the "clicks" state by 1 every time the button is clicked.


