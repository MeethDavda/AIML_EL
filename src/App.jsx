import "./app.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  async function generate() {
    const data = await axios
      .get("some url", text)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  }

  return (
    <div className="container">
      <div className="inner-cont">
        <p>Enter your text</p>
        <input
          type="text"
          name="text"
          id=""
          placeholder="Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={generate}>Generate</button>
        <p>Output</p>
        <div className="output">{data}</div>
      </div>
    </div>
  );
}

export default App;
