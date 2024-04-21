import React from "react";
import ChildComponent from "./ChildComponent";
export const MyContext = React.createContext();

// Context helps you make states, functions or variables global

function UseContextExample() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default UseContextExample;
// this example, we create a new MyContext object using React.createContext(). We then define a ParentComponent that wraps a ChildComponent with the MyContext.Provider component. We pass the string "Hello from Contex" as the value of the provider, which is the data we want to share.

//The ChildComponent uses the useContext hook to consume the data from the MyContext object. It receives the data as the return value of useContext(MyContext), and displays it in a div element.


// Managing app-wide state: You can use useContext to share app-wide state between components, user used in the app.
