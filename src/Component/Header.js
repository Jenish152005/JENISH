import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (

    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <a href="index.html">
            <h1 className="logo me-auto">City</h1><br />
            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </a>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link scrollto" to="/department/">Departments</NavLink></li>
            <li><NavLink className="nav-link scrollto" to="/doctor/">Doctors</NavLink></li>
            <li><NavLink className="nav-link scrollto " to="/about/">About</NavLink></li>  
            <li><NavLink className="nav-link scrollto" to="/contact/">Contact</NavLink></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <a href="./pages/appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
          Appointment</a>
        <a href="#" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Login/ Signup</span>
        </a>
      </div>
    </header>


  )


}
export default Header;