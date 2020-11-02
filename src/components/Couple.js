import React, { useState, useEffect } from "react";
import { HiHeart } from "react-icons/hi";
import "./Couple.css";
import Page from "./Page";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
function Couple() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };
  const Rule = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );
  // const Rule2 = ({ color }) => (
  //   <h3
  //     style={{
  //       color: color,
  //     }}
  //   ></h3>
  // );

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {/* <h1 className="couple_heading">THE HAPPY COUPLE </h1> */}
      <div className="container py-5">
        <div className="row mt-30">
          <div className="col-md-6 col-sm-6">
            <div className="box1" data-aos="fade-right">
              <img src="assets/him.jpg" alt="him" />
              <div className="box-content">
                {/* <h3 className="title custom-btn">
                  {" "}
                  <a href="">About him</a>{" "}
                </h3> */}
                <span className="post">The Groom</span>
                <ul className="social">
                  <li>
                    <a href="/#">
                      {/* <i className="fa fa-facebook"></i> */}
                      <FaFacebook />
                    </a>
                  </li>
                  {/* <li>
                    <a href="/#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <h1 className="text-center mt-5 him-her">Name</h1>
            <h3 className="surname text-center">-Surname-</h3>
            <p className="coup_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              autem magni optio cum provident cumque mollitia quibusdam quo
              beatae consectetur aliquid neque laborum sunt quasi nam,
              exercitationem modi magnam numquam nesciunt consequuntur voluptas
              dignissimos pariatur. Optio obcaecati eius cumque voluptas?
              Temporibus beatae quasi quod nostrum molestiae minus distinctio
              enim accusamus.
              {/* <Rule /> */}
            </p>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="box1" data-aos="fade-left">
              <img src="assets/her.jpg" alt="her" />
              <div className="box-content">
                {/* <h3 className="title custom-btn">
                  {" "}
                  <a href="">About her</a>{" "}
                </h3> */}
                <span className="post">The Bride</span>
                <ul className="social">
                  <li>
                    <a href="/#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="/#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <h1 className="text-center mt-5 him-her">Name</h1>
            <h3 className="surname text-center">-Surname-</h3>
            <p className="coup_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nobis nam, error deleniti animi fugiat? Asperiores soluta magni
              expedita accusantium explicabo quos laborum, alias fugit ullam
              eveniet voluptatum velit nulla, consectetur voluptas nisi illum
              dolor et inventore nobis quia minima? Earum odit corrupti repellat
              excepturi laboriosam tempora, vitae nihil totam?
            </p>
            {/* <Rule color="pink" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Couple;
