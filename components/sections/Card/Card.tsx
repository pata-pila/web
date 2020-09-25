// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./Card.types";
import styles from "./Card.scss";

// External
import Text from "../../text";

const Card: FC<Props> = (props) => (
  <section
    className={classnames(styles.section, styles[props.theme.toLowerCase()])}
  >
    <article className={`${styles.card} section-content mobile-column`}>
      <span className={styles.sectionName}>
        <Text elements={props.title} />
      </span>
      <div
        className={classnames(styles.cardImage, {
          [styles.avatar]: props.avatar,
        })}
      >
        <img src={(props.image as any).url} />
      </div>
      <div className={styles.cardContent}>
        <Text elements={props.content} />
      </div>
    </article>
  </section>
);

Card.displayName = "Card";

export default createFragmentContainer(singleFragmentComponent(Card), {
  data: graphql`
    fragment Card_data on Card {
      title
      theme
      image
      avatar
      content
    }
  `,
});
