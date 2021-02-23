import React from "react";
import ReactDOM from "react-dom";
import MovieInfo from "./MovieInfo";
import Extra from "./Extra";

const App = () => {
  return (
    <div className="ui divided items">
      <MovieInfo
        header="SAAHO"
        description="A full graphics movie showing many seas around world"
        name="Sangeetha Movies"
      />
      <Extra />
      <MovieInfo
        header="UPPENA"
        description="A romantic love story attracting teenagers and all"
        name="Inox Movies"
      />
      <Extra />
      <MovieInfo
        header="KHAIDHI"
        description="A realistic mass entertainer !!"
        name="SLV Movies"
      />
      <Extra />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
