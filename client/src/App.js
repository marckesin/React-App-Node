import React, { useState, useEffect } from "react";
import reactLogo from './react-logo.svg';
import nodeLogo from './nodejs-logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err))
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
