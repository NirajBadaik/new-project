import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Menu from "./Menu";
import "./Header.css";

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* <Menu /> */}
      <header className="carousel_conatiner">
        <div className="jumbotron parallax" id="parallax-static">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "230px",
            }}
            data-aos="fade-up"
          >
            <h1 style={{ display: "inline", verticalAlign: "middle" }}>Save</h1>
            <h1 style={{ display: "inline", verticalAlign: "middle" }}>
              The Date
            </h1>
            <h1 style={{ display: "inline", verticalAlign: "middle" }}>
              - 02
              <span className="dot" />
              12
              <span className="dot" />
              20 -
            </h1>
          </div>
        </div>
        {/* <Carousel
        fade="true"
        interval="2500"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <div className="jumbotron parallax" id="parallax-static">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "230px",
              }}
              data-aos="fade-up"
            >
              <h1 style={{ display: "inline", verticalAlign: "middle" }}>
                Save
              </h1>
              <h1 style={{ display: "inline", verticalAlign: "middle" }}>
                The Date
              </h1>
              <h1 style={{ display: "inline", verticalAlign: "middle" }}>
                - 02.12.20 -
              </h1>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "230px",
            }}
            className="jumbotron parallax"
            id="parallax-static-2"
          >
            <h1 style={{ display: "inline" }}>Save</h1>{" "}
            <h1 style={{ display: "inline" }}>The Date</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "230px",
            }}
            className="jumbotron parallax"
            id="parallax-static-3"
          >
            <h1 style={{ display: "inline" }}>Save</h1>
            <h1 style={{ display: "inline" }}>The Date</h1>
          </div>
        </Carousel.Item>
      </Carousel> */}
      </header>
    </>
  );
};

export default Header;
