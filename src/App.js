import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "hsl(242deg 74% 14%)";
      showAlert('dark mode has beeen enabled', "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('light mode has beeen enabled', "success");
    }
  }


  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
