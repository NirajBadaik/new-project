import React, { useState, useEffect } from "react";

// import { Container, Row, div } from "react-bootstrap";
import "./Nav.css";
import Logo from "./Logo";
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    // <div className={`nav ${fixed && "nav_fixed"}`}>
    <div className={`nav ${show && "nav__black"}`}>
      <li>
        <a href="">WHEN & WHERE </a>
      </li>
      <li>
        <a href="">EVENTS </a>
      </li>
      <li>
        <a href="/">
          <Logo />
        </a>
      </li>
      <li>
        <a href="">RECEPTION </a>
      </li>
      <li>
        <a href="">RSVP </a>
      </li>
    </div>
  );
};

export default Nav;
