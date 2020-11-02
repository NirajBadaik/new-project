import React, { useEffect } from "react";
import Head from "./Head";
import Menu from "./Menu";
import "aos/dist/aos.css";
import CountDown from "./CountDown";

function RSVP(props) {
  useEffect(() => {
    document.title = "RSVP | M & N";
    // scrollTo(0, 0);
  }, [props.title]);
  return (
    <>
      <Menu />
      <Head
        imgUrl="https://images.pexels.com/photos/211290/pexels-photo-211290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        heading="RSVP"
        subHeading="Please Reply"
      />
      <div
        className="container-fluid text-center"
        style={{ background: "#f6f6f6" }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScuMnrbOlyJB4FaLoWhaz_qdhRLg7fEo0MW5rf91tXt_w1gcQ/viewform?embedded=true"
          width="640"
          height="1168"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <CountDown />
    </>
  );
}

export default RSVP;
