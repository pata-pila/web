import React from "react";
import { useMediaQuery } from "react-responsive";

export const Responsive = (props) => {
  const isBrowser = useMediaQuery({ maxWidth: 1024 });
  const Mobile = props.mobile;
  const Desktop = props.desktop;
  const componentProps = { ...props };
  delete componentProps.mobile;
  delete componentProps.desktop;

  return isBrowser ? <Mobile {...props} /> : <Desktop {...props} />;
};
