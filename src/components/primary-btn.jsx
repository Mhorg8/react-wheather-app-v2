import "../index.css";
import React from "react";

export default function PrimaryBtn({ children }) {
  return (
    <button className="primary-btn" onClick={() => alert("You clicked me")}>
      {children}
    </button>
  );
}
