import React, { useState } from "react";
import "./App.css";
import NICForm from "./components/NICForm";
import NICInfo from "./components/NICInfo";
import "./components/NICForm.css";

function App() {
  const [nicNumber, setNICNumber] = useState("");

  const handleFormSubmit = (nic) => {
    setNICNumber(nic);
  };

  return (
    <div className="App">
      <h1>Sri Lankan NIC Information</h1>
      <NICForm onFormSubmit={handleFormSubmit} />
      {nicNumber && <NICInfo nicNumber={nicNumber} />}
    </div>
  );
}

export default App;
