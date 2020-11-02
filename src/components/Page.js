import React from "react";
import Container from "./Container";
const Page = (props) => {
  return <Container wide={props.wide}>{props.children}</Container>;
};

export default Page;
