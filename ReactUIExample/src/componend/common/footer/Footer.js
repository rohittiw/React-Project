import React from "react";
import footerlogo from "../../../assets/footer.png";
import "../footer/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <img src={footerlogo} alt="pay as you go" className="img"></img>
      </footer>
    </>
  );
}
