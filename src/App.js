import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // ✅ state to store light / dark mode
  const [mode, setMode] = useState("light");

  // ✅ state to store alert object (or null)
  const [alert, setAlert] = useState(null);

  // ✅ function to show alert
  const showAlert = (message, type) => {
    setAlert({ msg: message, type }); // 🔹 SET alert state
    setTimeout(() => {
      setAlert(null); // 🔹 CLEAR alert after 1.5 sec
    }, 1500);
  };

  // ✅ toggle dark/light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled", "success"); // 🔹 alert call
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success"); // 🔹 alert call
    }
  };

  // ✅ change browser tab title when mode changes
  useEffect(() => {
    document.title =
      mode === "dark"
        ? "TextUtils - Dark Mode"
        : "TextUtils - Light Mode";
  }, [mode]);

  return (
    <>
      {/* 🔹 Navbar gets toggleMode + mode */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* 🔹 Alert component receives alert state */}
      <Alert alert={alert} />

      <div className="container my-3">
        {/* 🔹 TextForm receives showAlert */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
