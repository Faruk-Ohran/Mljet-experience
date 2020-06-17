import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h3>MLJET</h3>
      <p>EXPERIENCE</p>
      <div className="informations">
        <div
          className="adresa"
          style={{ textAlign: "right", paddingRight: "20px" }}
        >
          Saplunara 17,
          <br /> Island Mljet, Croatia
        </div>
        <div className="boutige-resort" style={{ padding: "0 20px 0 20px" }}>
          BOUTIQUE PINE TREE RESORT****
          <br /> LUXURY APARMENTS & RESTAURANT
        </div>
        <div
          className="contact-info"
          style={{ textAlign: "left", paddingLeft: "20px" }}
        >
          +385 99 591 00 24
          <br />
          boutiquepinetree@gmail.com
        </div>
      </div>
      <div className="social-media-icons">
        <div className="instagram"></div>
        <div className="facebook"></div>
        <div className="tripadvisor"></div>
      </div>
      <div className="copy-right">
        <div>Copyright © 2019, BOUTIQUE PINE TREE RESORT****</div>
        <div>Cookie law | Privacy policy</div>
        <div style={{ textAlign: "right" }}>crafted by ICONIS</div>
      </div>
    </div>
  );
}

export default Footer;
