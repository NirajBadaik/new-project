import React from "react";
import "./Head.css";
import "aos/dist/aos.css";
function Head(props) {
  return (
    <div class="pimg1" style={{ backgroundImage: `url(${props.imgUrl})` }}>
      <div class="ptext">
        <div data-aos="flip-up">
          <h1
            className="headText"
            style={{
              color: "#fff",
              fontSize: "75px",
            }}
          >
            {props.heading}
          </h1>
          {/* <img src={props.imge} alt="" /> */}
        </div>
        <div data-aos="zoom-in-up">
          {" "}
          <h2
            className="headText"
            style={{ color: "#f0394d", fontSize: "35px" }}
          >
            {" "}
            {props.subHeading}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Head;
