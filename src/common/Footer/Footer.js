import React from "react";
import logo from "../../assests/brand/logo.png";
import { footerMenu } from "../../assests/data";
//react icons
import {FaEnvelope, FaPhoneAlt, FaVaadin} from 'react-icons/fa';
// css file
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="nav-img">

        <img src={logo} alt='footer logo' />
        <h3>About us</h3>
        <p>The about us page is often a reflection of the purpose and personality of the business and its owners or top employees</p>
        <h4>Contact us</h4>
        <ul>
          <li><FaPhoneAlt /> <span>+880-18523-33510</span></li>
          <li><FaEnvelope /> <span>Rakibarif20@gmail.com</span></li>
        </ul>
        </div>
      </div>
      {footerMenu.map((list) => {
        const { title, items } = list;
        console.log(items);
        return (
          <div className="footer_div">
            <h3>{title}</h3>
            <ul>
              {items.map((item) => {
                const {id,url,text} = item;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div>
        <h4>Subscribe more info</h4>
        <div className="custom_intput">
          <FaEnvelope />
          <input placeholder="Enter your email" />
        </div>
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
