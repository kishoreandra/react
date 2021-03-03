import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { results: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID nOJxDziDI3z4tc2gSX_A9YyfMbAgTxMd8PXEoFo-CHE",
      },
    });

    this.setState({ results: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.results.length} results
      </div>
    );
  }
}

export default App;
