import React from "react";
import "./index.css";

interface TipProps {
  message: string;
  onClose: () => void;
}

const Tip: React.FC<TipProps> = ({ message, onClose }) => {
  return (
    <div className="tip-overlay" onClick={onClose}>
      <div className="tip-box">
        {message}
      </div>
    </div>
  );
};

export default Tip;
