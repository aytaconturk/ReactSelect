import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

import "./styles.css";

function App() {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#023950",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    })
  };

  const options = [
    {
      label: "option 1",
      value: 1
    },
    {
      label: "option 2",
      value: 2
    },
    {
      label: "option 3",
      value: 3
    },
    {
      label: "option 4",
      value: 4
    },
    {
      label: "option 5",
      value: 5
    }
  ];

  return (
    <div className="App">
      <Select styles={customStyles} options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
