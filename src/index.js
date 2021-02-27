import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errMsg: "",
    };

    navigator.geolocation.getCurrentPosition(
      // update state using setState
      (pos) => this.setState({ latitude: pos.coords.latitude }),
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  showSeason() {
    if (this.state.errMsg && !this.state.latitude) {
      return `Error : ${this.state.errMsg}`;
    }
    if (!this.state.errMsg && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please Allow Location !!" />;
  }

  render() {
    return this.showSeason();
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
