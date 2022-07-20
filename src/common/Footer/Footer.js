import React from "react";
import logo from "../../assests/brand/logo.png";
import { footerMenu,footerSocialIcons } from "../../assests/data";
//react icons
import { FaEnvelope, FaPhoneAlt, FaVaadin } from "react-icons/fa";
// css file
import "./footer.scss";

const Footer = () => {
  return (
    <>
    <footer>
      <div>
        <div className="nav-img">
          <img src={logo} alt="footer logo" />
        </div>
        <h3>About us</h3>
        <p>
          The about us page is often a reflection of the
          <br /> purpose and personality of the business and
          <br />  its owners or top employees
        </p>
        <h4>Contact us</h4>
        <ul className="contact_address">
          <li>
            <FaPhoneAlt /> <span>+880-18523-33510</span>
          </li>
          <li>
            <FaEnvelope /> <span>Rakibarif20@gmail.com</span>
          </li>
        </ul>
      </div>
      {footerMenu.map((list) => {
        const { title, items } = list;
        console.log(items);
        return (
          <div className="footer_div">
            <h3>{title}</h3>
            <ul>
              {items.map((item) => {
                const { id, url, text } = item;
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
        <h3>Subscribe more info</h3>
        <div className="custom_intput">
          <FaEnvelope />
          <input placeholder="Enter your email" />
        </div>
        <button className="btn">Subscribe</button>
      </div>
    </footer>
    <div className="copyRight">
      <div className='blank_div'></div>
      <ul className="social-icons">
        {footerSocialIcons.map((item)=>{
          const {id,url,icon} = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
      <div className="copyRightText">
        <span>2022 &copy; Company LTD. All Right reserved</span>
      </div>
    </div>
    </>
  );
};

export default Footer;
