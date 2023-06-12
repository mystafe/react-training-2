import React from "react";
import "../css/Bank.css";

const Bank = ({ name, logo, url, card }) => {
  return (
    <div className="bank">
      <img className="bank-logo" src={logo} alt={name} />
      <h3 className="bank-name">{name}</h3>
      <p className="bank-card">Card: {card}</p>
      <a
        className="bank-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </div>
  );
};

export default Bank;
