import React from "react";
import "./App.css";
import AccountDetails from "./componend/account/AccountDetails";
import DistanceCalculation from "./componend/account/DistanceCalculation";
import Footer from "./componend/common/footer/Footer";
import Header from "./componend/common/header/Header";

function App() {
  return (
    <div>
      {/* <header className="App-header"></header> */}
      <Header />
      <div className="container">
        <AccountDetails />
        <DistanceCalculation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
