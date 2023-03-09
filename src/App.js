import React, { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState(`red`);
  const [disable, setDisable] = useState(false);

  const newBtnColor = btnColor === `red` ? `blue` : `red`;

  return (
    <div className="App">
      <button
        disabled={disable}
        onClick={() => setBtnColor(newBtnColor)}
        style={{ backgroundColor: btnColor }}>
        Change to {newBtnColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={disable}
        defaultChecked={disable}
        onClick={(e) =>
          // @ts-ignore
          setDisable(e.target.checked)
        }
      />
      <label id="enable-button-checkbox"></label>
    </div>
  );
}

export default App;
