import "./App.css";
import React, { useEffect, useState } from "react";
import nodeLogo from "./nodejs-logo.svg";
import reactLogo from "./react-logo.svg";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="React-logo" alt="logo" />
        <img src={nodeLogo} className="Node-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
