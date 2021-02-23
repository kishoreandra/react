import React from "react";
import ReactDOM from "react-dom";

// The class must be a JS class and should extending React.Component parent class
// The class must have a render method which gets called on creating an App instance
class App extends React.Component {
  // A state is a JS object that has data relevant to the component
  // Updating a state will cause the rerender of component
  // state must be updated only using setState() method only

  constructor(props) {
    super(props);
    this.state = { data: "Its me dude" };
  }

  render() {
    return (
      <div>
        {/* refer the value of state as below : */}
        <h1>Hi there and {this.state.data} ... I am a class based component</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
