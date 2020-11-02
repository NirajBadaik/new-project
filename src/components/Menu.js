import React, { useEffect, useState } from "react";
import "./Menu.css";
import Logo from "./Logo";
import { RiHomeHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Menu() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`header  ${show && "header_white"}`}>
        <a href="/" className="logo">
          <RiHomeHeartFill color="#f0394d" size="4.3rem" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#work">When and where</a>
          </li>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
          <li>
            <Link to="/RSVP">RSVP</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Menu;
