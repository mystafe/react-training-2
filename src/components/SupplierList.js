import React, { useState, useEffect } from "react";
import "../css/SupplierList.css";

import axios from "axios";
import Supplier from "./Supplier";

function SupplierList() {
  const [suppliers, setSupplierList] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/suppliers")
      .then((response) => {
        setSupplierList((suppliers) => (suppliers = response.data));
      })
      .then(() => {
        console.log("My Supplier", suppliers);
      });
  }, []);

  return (
    <div className="supplier-list">
      {suppliers.map((supplier, index) => (
        <Supplier
          key={index}
          id={supplier.id}
          companyName={supplier.companyName}
          contactTitle={supplier.contactTitle}
          contactName={supplier.contactName}
        />
      ))}
    </div>
  );
}

export default SupplierList;
