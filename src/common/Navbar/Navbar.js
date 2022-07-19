import React from "react";
import { navItems } from "../../assests/data";
import logo from "../../assests/brand/logo.png";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
 

/* css file */ 
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav-main">
      <section className="nav-section">
        <div className="nav-logo">
          <div className="nav-img">
            <img src={logo} alt="Logo" className="" />
          </div>
        </div>
        <div className="nav-items">
          <ul>
            {navItems.map((items) => {
              const { id, url, text } = items;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="btnArea">
          <button className="btn btn-dark-light" type="toggle"><MdOutlineNightlightRound /> <MdOutlineLightMode /></button>
          <button className="btn btn-login">Login</button>
          <button className="btn btn-signUp">Sign up</button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
