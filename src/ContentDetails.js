import React from "react";
import Faker from "faker";

// As convention use Title case ands same name as Component name
const ContentDetails = (props) => {
  // props is the default parameter . It is an object having properties that are passed from parent
  return (
    <div className="event">
      <div className="label">
        <img src={Faker.image.image()} />
      </div>
      <div className="content">
        You added {props.name} to the group <a>Coworkers</a>
      </div>
    </div>
  );
};

// make this component available all over to use in this project
export default ContentDetails;
