import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banks from "./components/Banks";
import SupplierList from "./components/SupplierList";
function App() {
  return (
    <>
      <Header></Header>
      <SupplierList></SupplierList>
      <hr />
      <h1>Banks</h1>
      <Banks></Banks>
      <Footer></Footer>
    </>
  );
}

export default App;
