import React from "react";
import "./Location.css";
import Page from "./Page";
import SimpleMap from "./SimpleMap";
import { GoBell } from "react-icons/go";
import { MdRestaurant } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { useEffect } from "react";
import { FacebookProvider, Comments } from "react-facebook";
function Location() {
  return (
    <Page>
      <section id="where-when">
        <div className="container">
          {/* <!-- ROW-1 --> */}
          <div className="row">
            {/* <!-- SECTION TITLE --> */}
            <div className="col-md-12 text-center">
              <div
                className="section-title animation fadeInUp animated"
                style={{ visibility: "visible" }}
              >
                <h2>
                  WHEN <span className="and">&amp;</span> WHERE
                </h2>

                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices malesuada ante quis pharetra. Nullam notn
                  bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                  fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                  aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                  ex, vitae
                </p> */}
              </div>
            </div>
          </div>
          {/* <!-- END of ROW-1 --> */}

          {/* <!-- ROW-2 --> */}
          <div className="row">
            {/* <!-- SECTION TITLE --> */}
            <div className="col-md-12 text-center">
              <div
                className="banner-text dark full animation fadeIn animated"
                style={{ visibility: "visible" }}
              >
                <hr className="style2" />
                <div className="row ">
                  <div className="col-md-4">
                    <h3 className="event_details">DECEMBER / 2ND / 2020</h3>
                  </div>
                  <div className="col-md-4">
                    <div className="border-column">
                      <h3 className="event_details">TIME:</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="event_details">LOCATION:</h3>
                  </div>
                </div>
                <hr className="style2" />
              </div>
            </div>
          </div>
          {/* <!-- END of ROW-2 --> */}

          {/* <!-- ROW-3 --> */}
          <div className="row ">
            <div
              className="col-md-12 mt-5  animation fadeIn animated"
              style={{ visibility: "visible" }}
            >
              <div className="d-inline-flex">
                <div
                  className=" circle mr-2"
                  style={{ backgroundColor: "#f0394d" }}
                >
                  {/* <i class="de-icon-bell-alt"></i> */}{" "}
                  <GoBell color="#fff" size="1.2rem" />
                </div>
                <h3 className="inline ">CEREMONY</h3>
              </div>
              <p className="events_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue
              </p>
              <div className="d-inline-flex">
                <div
                  className=" circle "
                  style={{ backgroundColor: "#f6700e" }}
                >
                  {/* <i class="de-icon-food"></i> */}
                  <MdRestaurant color="#fff" size="1.4rem" />
                </div>
                <h3 className="inline">RECEPTION</h3>
              </div>
              <p className="events_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue
              </p>

              <div className="d-inline-flex">
                <div className="circle" style={{ backgroundColor: "#0d9a48" }}>
                  {/* <i className="de-icon-home-1"></i> */}
                  <MdHome color="#fff" size="1.4rem" />
                </div>
                <h3 className="inline">ACCOMODATION</h3>
              </div>
              <p className="events_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h2 className="text-center ">LEAVE A COMMENT</h2>

              <div
                className="fb-comments"
                data-href="https://netflix-clone-7dc24.web.app/"
                data-numposts="5"
                data-width="100%"
              ></div>
            </div>
            {/* <div
              className="col-md-6 my-3 animation fadeIn animated"
              style={{ visibility: "visible" }}
             >
              
             
              
            </div> */}
          </div>
        </div>
      </section>
      <div className="text-center mt-5 py-5"></div>
    </Page>
  );
}

export default Location;
