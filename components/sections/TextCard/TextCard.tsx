import React from "react";

import Text from "../../text";
import { Props } from "./TextCard.types";
import styles from "./TextCard.scss";

const TextCard = (props: Props) => {
  const { background_color, text } = props;
  return (
    <section 
      className={`${styles.container} section-container`}
      style={{ backgroundColor: background_color ?? "white" }}
    >
      <div className={`${styles.sectionContainer} section-content`}>
        <Text elements={text} />
      </div>
    </section>
  );
};

export default TextCard;
