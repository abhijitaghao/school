import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="main-navbar">
        <nav className="navbar navbar-expand-sm navbar-light bg-light py-3">
          <div className="container">
            <a href="#home" className="navbar-brand">
              School
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#aboutus" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="na-item">
                  <a href="#equire" className="nav-link">
                    Enquire
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#aboutus" className="nav-link">
                    A Day at school
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#aboutus" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
