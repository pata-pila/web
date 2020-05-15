// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../../../lib/singleFragmentComponent";

import { Props } from "./ImpactItem.types";
import styles from "./ImpactItem.scss";

export const ImpactItem: FC<Props> = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={(icon as any).url} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title[0].text}</h1>
        <h6 className={styles.subtitle}>{subtitle[0].text}</h6>
      </div>
    </div>
  );
};

export const ImpactItemContainer = createFragmentContainer(
  singleFragmentComponent(ImpactItem),
  {
    data: graphql`
      fragment ImpactItem_data on Icon_listIcon_list_elements {
        title
        subtitle
        icon
      }
    `,
  }
);