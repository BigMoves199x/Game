import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Status = ({ status }) => {
  return (
    <div>
      <p data-testid="gameStatus" className={`status-message ${status ? "fade-in" : ""}`}>
        {status === "✅" && <FaCheckCircle style={{ color: "green", fontSize: "24px" }} />}
        {status === "❌" && <FaTimesCircle style={{ color: "red", fontSize: "24px" }} />}
        {status !== "✅" && status !== "❌" && status}
      </p>
    </div>
  );
};

export default Status;
