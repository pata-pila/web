// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

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
        backgroundImage: `url(${(background_image as any).url})`,
      }}
    >
      <div className="section-content mobile-column">
        <span className={`${styles.title} vertical-title`}>{title}</span>
        <IconList data={icons}/>
        {/* <div>
          {icon_list_elements.map((item, index) => (
            <ImpactItem data={item} key={index} />
          ))}
        </div> */}
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
          __typename
          ... on Icon_list {
            ...IconList_data
          }
        }
        background_image
      }
    `,
  }
);
