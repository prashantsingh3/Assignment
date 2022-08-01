import { useState, useEffect, useCallback } from "react";

export default function Box(props) {
  const { boxIndex, selectedIndex, setSelectedIndex, keyboardEnabled } = props;
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteBox = () => {
    if (boxIndex === selectedIndex) {
      setIsDeleted(true);
    }
  };

  const buttonPressFunction = useCallback(
    (event) => {
      if (keyboardEnabled && boxIndex === selectedIndex) {
        if (event.code === "Backspace" || event.code === "Delete") {
          deleteBox();
        }
        // right button
        if (event.keyCode === 39) {
          setXIndex(xIndex + 5);
        }
        // left button
        if (event.keyCode === 37) {
          setXIndex(xIndex - 5);
        }
        // up button
        if (event.keyCode === 38) {
          setYIndex(yIndex - 5);
        }
        // down button
        if (event.keyCode === 40) {
          setYIndex(yIndex + 5);
        }
      }
    },
    [boxIndex, keyboardEnabled, selectedIndex, xIndex, yIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", buttonPressFunction);

    return () => {
      document.removeEventListener("keydown", buttonPressFunction);
    };
  }, [buttonPressFunction]);

  return (
    <div
      onClick={() => {
        setSelectedIndex(boxIndex);
      }}
      style={{
        visibility: isDeleted ? "hidden" : "visible",
        margin: "10px",
        height: "100px",
        width: "100px",
        backgroundColor: boxIndex === selectedIndex ? "yellow" : "red",
        transform: `translate(${xIndex}px,${yIndex}px)`,
        zIndex: boxIndex,
      }}
    >
      {boxIndex}
    </div>
  );
}
