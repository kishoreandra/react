// import libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
  const btnName = "click me";
  const inputStyle = {
    border: "1px solid red",
  };
  return (
    <div>
      {/* This is pure HTML which is not JSX JSX is similar to HTMl but differ in
      some aspects */}
      {/* <label for="name" class="label">`
        {" "}
        Name:
      </label>
      <input id="name" type="text" placeholder="Enter Your Name">
        {" "}
      </input>
      <button style="background-color:blue">Click Me!!</`button> */}

      {/* converting HTML to JSX 
      1. Adding custom styling - it would be as style = {{backgroundColor: 'teal'}}
          * { {key : 'value'}- This is an js object }- this mean we are referring some js in JSX
          * All the styling having a hyphen '-' , remove the hyphen and capitalize the next letter 
             - align-content --> alignContent
      2. Adding a class name
          * class in JSX is className - this is due to the key word class in JS to avoid conflicts
      3. How JSX can refer a JS variable besides HTML don't? 
          * we could refer a JS variable inside JSX , like {some_js_variabe}
          * eg:   const name = 'click me'
          * <button>{name}</button>
      
      Note : By convention all the JSX are put under double quotes and all other JS variables are put under single quotes
      
      4. some of HTML attributes are JS keywords like for - to check them we could see console
          * we should use htmlFor - shows a warning
      */}
      <label htmlFor="name" className="label">
        Name:
      </label>
      <input
        style={inputStyle}
        id="name"
        type="text"
        placeholder="Enter Your Name"
      ></input>
      <button style={{ backgroundColor: "blue" }}>{btnName}</button>
    </div>
  );
};

// render to screen
ReactDOM.render(<App />, document.querySelector("#root"));
