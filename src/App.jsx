import "./app.css";
import axios from "axios";
import { useState } from "react";
import sideImage from "./assets/Microsites-amico.svg";



function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  async function generate() {
    const data = await axios
      .post("http://127.0.0.1:5000/generate_text", {"text": text})
      .then((res) => {
        console.log(res.data.generated_text.generated_text);
        setData(res.data.generated_text.generated_text);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  }

  return (
    <div>
      <div className="navbar">
        <div id="my">My</div>
        <div id="gpt">GPT</div>
      </div>
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
        <img src={sideImage} alt="image" />
      </div>
    </div>
  );
}

export default App;
