// React/Relay
import React, { FC } from "react";

// Component
import { Props } from "./Header.types";

export const Header: FC<Props> = (props) => {
  const headerProps = { ...props };
  delete headerProps.data;

  switch(props.data.type) {
    case "heading1":
      return <h1 {...headerProps}>{props.data.text}</h1>;
    case "heading2":
      return <h2 {...headerProps}>{props.data.text}</h2>;
    case "heading3":
      return <h3 {...headerProps}>{props.data.text}</h3>;
    case "heading4":
      return <h4 {...headerProps}>{props.data.text}</h4>;
    case "heading5":
      return <h5 {...headerProps}>{props.data.text}</h5>;
    case "heading6":
      return <h6 {...headerProps}>{props.data.text}</h6>;
    default:
      return <h1 {...headerProps}>{props.data.text}</h1>;
  }
};
