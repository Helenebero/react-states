import { useContext } from "react";
import { MyContext } from "./UseContextExample";

function ChildComponent() {
  const contextData = useContext(MyContext);

  return <div>{contextData}</div>;
}

export default ChildComponent;
////When you render the ParentComponent, you should see the text "Hello from Context" displayed on the page, because the ChildComponent is able to access the data from the MyContext object using useContext.