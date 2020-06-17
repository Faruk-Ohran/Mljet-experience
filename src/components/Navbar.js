import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="brand">
          <h3>MLJET</h3>
          <h6>EXPERIENCE</h6>
        </div>
        <div className="buttons">
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle zanimljivosti"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ZANIMLJIVOSTI
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ transform: "translate3d(10px, 27, 0) !important" }}
            >
              <a className="dropdown-item" href="#">
                Gdje jesti?
              </a>
              <a className="dropdown-item" href="#">
                Gdje odsjesti?
              </a>
              <a className="dropdown-item" href="#">
                Zabava
              </a>
            </div>
          </div>
          <a className="kako-do-mljeta">KAKO DO MLJETA</a>
          <div className="oval">
            <a className="en">EN</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
