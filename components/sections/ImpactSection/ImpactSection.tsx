// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "lib/singleFragmentComponent";
import { PrismicImage } from "lib/prismicTypes";

// Component
import { Props } from "./ImpactSection.types";
import styles from "./ImpactSection.scss";
import { IconListContainer as IconList } from "../IconList";

export const ImpactSection: FC<Props> = (props) => {
  const { title, icons, background_image } = props;
  return (
    <section
      className={`${styles.container} section-container`}
      style={{
        backgroundImage: `url(${(background_image as PrismicImage).url})`,
      }}
    >
      <div className="section-content mobile-column">
        <span className={`${styles.title} vertical-title`}>
          {title[0].text}
        </span>
        <IconList data={icons} />
      </div>
    </section>
  );
};

export const ImpactSectionContainer = createFragmentContainer(
  singleFragmentComponent(ImpactSection),
  {
    data: graphql`
      fragment ImpactSection_data on Impact_section {
        title
        icons {
          ...IconList_data
        }
        background_image
      }
    `,
  }
);
