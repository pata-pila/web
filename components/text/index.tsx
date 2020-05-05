import React, { FC, ReactElement } from "react";
import { RichText } from "prismic-reactjs";

export interface Props {
  elements: any;
}

const Text: FC<Props> = (props) => <RichText render={props.elements} />;

export default Text;
