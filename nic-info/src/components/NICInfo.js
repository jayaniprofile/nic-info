import React from "react";
import "./NICForm.css";

const NICInfo = ({ nicNumber }) => {
  const extractBirthDate = () => {
    const year = parseInt(nicNumber.substring(0, 2));
    let days = parseInt(nicNumber.substring(2, 5));
    const isMale = days < 500;
    days -= isMale ? 0 : 500;

    let month = 1;
    while (days > 31) {
      if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          if (days > 29) {
            days -= 29;
          } else {
            break;
          }
        } else {
          if (days > 28) {
            days -= 28;
          } else {
            break;
          }
        }
      } else if ([4, 6, 9, 11].includes(month)) {
        if (days > 30) {
          days -= 30;
        } else {
          break;
        }
      } else {
        if (days > 31) {
          days -= 31;
        } else {
          break;
        }
      }
      month++;
    }

    // Subtract one day to adjust for off-by-one error
    days--;

    const date =
      days.toString().padStart(2, "0") +
      "/" +
      month.toString().padStart(2, "0") +
      "/" +
      (year + 1900).toString();
    return date;
  };

  const extractGender = () => {
    return parseInt(nicNumber.charAt(2)) < 5 ? "Male" : "Female";
  };

  return (
    <div className="info">
      <h2>NIC Information</h2>
      <p>Birth Date: {extractBirthDate()}</p>
      <p className="gender">Gender: {extractGender()}</p>
    </div>
  );
};

export default NICInfo;
