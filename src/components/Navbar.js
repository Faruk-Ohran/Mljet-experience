import React from "react";

function Navbar() {
  return (
    <div className="navigation">
      <div className="brand">
        <h3>MLJET</h3>
        <h6>EXPERIENCE</h6>
      </div>
      <div className="buttons">
        <a className="zanimljivosti">ZANIMLJIVOSTI</a>
        <a className="kako-do-mljeta">KAKO DO MLJETA</a>
        <div className="oval">
          <a className="en">EN</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
