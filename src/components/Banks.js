import React from "react";
import Bank from "./Bank";
//import "../css/Bank.css";

function Banks() {
  const banks = [
    {
      name: "Akbank",
      logo: "https://seeklogo.com/images/A/Akbank-logo-2FBBC5A0D6-seeklogo.com.png",
      url: "https://www.akbank.com/",
      card: "Axess",
    },
    {
      name: "Garanti",
      logo: "https://seeklogo.com/images/G/Garanti_Bankasi-logo-E353AB793A-seeklogo.com.png",
      url: "https://www.garanti.com.tr/",
      card: "Bonus",
    },
    {
      name: "İş Bankası",
      logo: "https://seeklogo.com/images/T/TURKIYE_IS_BANKASI-logo-5145D61925-seeklogo.com.png",
      url: "https://www.isbank.com.tr/",
      card: "Maximum",
    },
  ];

  return (
    <div>
      {banks.map((bank, index) => (
        <Bank
          key={index}
          name={bank.name}
          logo={bank.logo}
          url={bank.url}
          card={bank.card}
        />
      ))}
    </div>
  );
}

export default Banks;
