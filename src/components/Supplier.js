import React from "react";
import "../css/Supplier.css";

const Supplier = ({ id, companyName, contactName, contactTitle }) => {
  return (
    <div className="supplier">
      <span className="supplier-id">{id} </span>
      <h3 className="supplier-companyNAME">{companyName}</h3>
      <p className="supplier-com">Contact: {contactName}</p>
      <p className="supplier-contactTitle">{contactTitle}</p>
    </div>
  );
};

export default Supplier;
