import React from "react";
import ReactDOM from "react-dom";

// The class must be a JS class and should extending React.Component parent class
// The class must have a render method which gets called on creating an App instance
class App extends React.Component {
  render() {
    return <div>Hi there ... I am a class based component</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
