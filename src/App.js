import { useState } from "react";
import "./App.css";

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TexTools" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<Textform mode={mode} showAlert={showAlert} />}
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
