import React, { useState } from "react";
import "./NICForm.css";

const NICForm = ({ onFormSubmit }) => {
  const [nicNumber, setNICNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(nicNumber);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nicNumber}
          onChange={(e) => setNICNumber(e.target.value)}
          placeholder="Enter NIC Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NICForm;
