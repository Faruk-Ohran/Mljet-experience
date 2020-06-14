import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <div className="navbar">
      <div className="brand col-md-6" style={{ height: "64px", padding: "0" }}>
        <h3 style={{ textDecoration: "underline", margin: "0" }}>MLJET</h3>
        <h6>EXPERIENCE</h6>
      </div>
      <div className="buttons col-md-5">
        <NavDropdown title="ZANIMLJIVOSTI" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Gdje jesti?</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Gdje odsjesti?</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Zabava</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">KAKO DO MLJETA</Nav.Link>
        <Nav.Link href="#">
          <div className="oval">
            <p className="en">EN</p>
          </div>
        </Nav.Link>
      </div>
    </div>
  );
}

export default Navbar;
