import React, { useEffect } from "react";
import Menu from "./Menu";
import Head from "./Head";
import Couple from "./Couple";
import Location from "./Location";
import CountDown from "./CountDown";

function Home(props) {
  useEffect(() => {
    document.title = "Welcome | M & N";
    // scrollTo(0, 0);
  }, [props.title]);
  return (
    <>
      <Menu />
      <Head
        heading="save the date"
        subHeading="02-12-2020"
        imgUrl="https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?cs=srgb&dl=pexels-pixabay-414660.jpg&fm=jpg"
      />
      <Couple />
      <Location />
      <CountDown />
    </>
  );
}

export default Home;
