import React, { useState, useEffect } from "react";
import Nav from "./Nav";
function Controller() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <>{isDesktop ? <Nav /> : <div></div>}</>;
}

export default Controller;
