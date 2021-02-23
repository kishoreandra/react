import React from "react";
import ReactDOM from "react-dom";
import MovieInfo from "./MovieInfo";
import Extra from "./Extra";

const App = () => {
  return (
    <div className="ui divided items" style={{ margin: "30px 20px" }}>
      <MovieInfo
        header="SAAHO"
        description="A full graphics movie showing many seas around world"
        name="Sangeetha Movies"
        image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Saahooo-770x433.jpeg?CTZ5_McmEzp1xQOdnu76FEf_m_1GJojM"
      />
      <Extra />
      <MovieInfo
        header="UPPENA"
        description="A romantic love story attracting teenagers and all"
        name="Inox Movies"
        image="https://www.tollywood.net/wp-content/uploads/2020/03/Uppena-to-aim-for-Arya-release-date.jpg"
      />
      <Extra />
      <MovieInfo
        header="KHAIDHI"
        description="A realistic mass entertainer !!"
        name="SLV Movies"
        image="https://www.xappie.com/image.php?width=650&height=487&image=./uploads/entertainments/khaidi14daysbnr1.jpg"
      />
      <Extra />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
