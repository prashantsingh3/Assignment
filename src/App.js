import Box from "./Box";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [noOfBox, setNoOfBox] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [keyboardEnabled, setKeyboardEnabled] = useState(true);

  const addBox = () => {
    let tmpBoxes = [...boxes];
    tmpBoxes.push({ id: noOfBox });
    setBoxes(tmpBoxes);
    setNoOfBox(noOfBox + 1);
  };

  return (
    <div className="App">
      <h1>Moveable Box Generator</h1>
      <button
        style={{
          margin: "5px",
          backgroundColor: "#82eebc",
          fontSize: "larger",
          borderRadius: "5px",
        }}
        onClick={addBox}
      >
        Add Box
      </button>
      <button
        style={{
          margin: "5px",
          backgroundColor: "#82eebc",
          fontSize: "larger",
          borderRadius: "5px",
        }}
        onClick={() => {
          setKeyboardEnabled(!keyboardEnabled);
        }}
      >{`Click to ${keyboardEnabled ? "DISABLE" : "ENABLE"} keyboard`}</button>

      <div className="App">
        <div className="wrapper">
          {boxes.map((box) => (
            <Box
              boxIndex={box.id}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              keyboardEnabled={keyboardEnabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
