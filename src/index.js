// import libraries
import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

// create a react component
const App = () => {
  return (
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src={Faker.image.image()} />
        </div>
        <div class="content">
          You added {Faker.name.lastName()} to the group <a>Coworkers</a>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src={Faker.image.image()} />
        </div>
        <div class="content">
          You added {Faker.name.lastName()} to the group <a>Coworkers</a>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src={Faker.image.image()} />
        </div>
        <div class="content">
          You added {Faker.name.lastName()} to the group <a>Coworkers</a>
        </div>
      </div>
    </div>
  );
};

// render to screen
ReactDOM.render(<App />, document.querySelector("#root"));
