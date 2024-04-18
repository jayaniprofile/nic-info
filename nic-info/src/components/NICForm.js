import React, { useState } from "react";

const NICForm = ({ onFormSubmit }) => {
  const [nicNumber, setNICNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(nicNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nicNumber}
        onChange={(e) => setNICNumber(e.target.value)}
        placeholder="Enter NIC Number"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NICForm;
