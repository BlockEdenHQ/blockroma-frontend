import { styled } from "styletron-react";
import React from "react";

const LEN = "32px";

type PropTypes = {
  url: string;

  width?: string;
  height?: string;
  margin?: string;
};

export function Icon({
  width = LEN,
  height = LEN,
  url,
  margin = "0",
}: PropTypes): JSX.Element {
  const StyledDiv = styled("div", {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundImage: `url("${url}")`,
    boxSizing: "border-box",
    width,
    height,
    margin,
  });

  return <StyledDiv />;
}
