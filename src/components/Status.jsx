import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import './Status.css'

const Status = ({ status }) => {
  return (
    <div>
      <p data-testid="gameStatus" className={`status-message ${status ? "fade-in" : ""}`}>
        {status === "✅" && <FaCheckCircle style={{ color: "green", fontSize: "34px" }} /> }
        {status === "❌" && <FaTimesCircle style={{ color: "red", fontSize: "34px" }} />}
        {status !== "✅" && status !== "❌" && status}
      </p>
    </div>
  );
};

export default Status;
