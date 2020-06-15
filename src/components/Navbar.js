import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <div className="navbar">
      <div className="col-md-6" style={{ height: "64px", padding: "0" }}>
        <h3 style={{ textDecoration: "underline", margin: "0" }}>MLjET</h3>
        <h6>EXPERIENCE</h6>
      </div>
      <div className="buttons col-md-5">
        <NavDropdown title="ZANIMLJIVOSTI" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Gdje jesti?</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Gdje odsjesti?</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Zabava</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">KAKO DO MLJETA</Nav.Link>

        <div className="oval">
          <p className="en">EN</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
