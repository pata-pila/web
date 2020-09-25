// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./ImpactStatistics.types";
import styles from "./ImpactStatistics.scss";
import { IconListContainer as IconList } from "../IconList";

export const ImpactStatistics: FC<Props> = (props) => {
  const { title, icons, background_color } = props;
  return (
    <section
      className={`${styles.container} section-container`}
      style={{
        backgroundColor: background_color,
      }}
    >
      <div
        className={classnames("section-content", "mobile-column", styles.main)}
      >
        <div className={styles.title}>{title[0].text}</div>
        <div>
          <IconList data={icons} />
        </div>
      </div>
    </section>
  );
};

export const ImpactStatisticsContainer = createFragmentContainer(
  singleFragmentComponent(ImpactStatistics),
  {
    data: graphql`
      fragment ImpactStatistics_data on Impact_statistics {
        title
        icons {
          __typename
          ... on Icon_list {
            ...IconList_data
          }
        }
        background_color
      }
    `,
  }
);
