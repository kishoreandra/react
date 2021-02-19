// import libraries
import React from "react";
import ReactDOM from "react-dom";
import ContentDetails from "./ContentDetails";
// create a react component
const App = () => {
  return (
    <div className="ui feed">
      {/* send props (propName = propValue) from parent (App) to child (content) like below */}
      <ContentDetails name="rohith" />
      <ContentDetails name="dikshith" />
      <ContentDetails name="sai" />
      <ContentDetails name="kishore" />
    </div>
  );
};

// render to screen
ReactDOM.render(<App />, document.querySelector("#root"));
