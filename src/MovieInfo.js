import React from "react";
import Faker from "faker";

const MovieInfo = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <a className="header">{props.header}</a>
        <div className="meta">
          <span className="cinema">{props.name}</span>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
