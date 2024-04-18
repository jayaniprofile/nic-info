import React from "react";

const NICInfo = ({ nicNumber }) => {
  const extractBirthDate = () => {
    // Logic to extract birth date from NIC number
  };

  const extractGender = () => {
    // Logic to extract gender from NIC number
  };

  return (
    <div>
      <h2>NIC Information</h2>
      <p>Birth Date: {extractBirthDate()}</p>
      <p>Gender: {extractGender()}</p>
    </div>
  );
};

export default NICInfo;
