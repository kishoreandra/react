import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const seasonConfig = {
  summer: {
    text: `It's Hot Buddy !! Let's chill Wohooo`,
    iconName: `sun`,
  },
  winter: {
    text: `It's soo Coooll !! let's have fire camp Ughh`,
    iconName: `snowflake`,
  },
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text = seasonConfig[season].text;
  const iconName = seasonConfig[season].iconName;
  return (
    <div className={`season-${season}`}>
      <i className={`massive ${iconName} icon season-first`} />
      <h1 className="season-text">{text}</h1>
      <i className={`massive ${iconName} icon season-last`} />
    </div>
  );
};

export default SeasonDisplay;
