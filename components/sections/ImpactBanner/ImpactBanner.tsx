// Libraries
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./ImpactBanner.types";
import styles from "./ImpactBanner.scss";
import { ImpactItemContainer as ImpactItem } from "./components/ImpactItem/ImpactItem";
import Text from "../../text";

export const ImpactBanner: FC<Props> = (props) => {
  const { title, icons, background_image } = props;

  let elements;
  if (icons.__typename == "Icon_list") {
    elements = icons.elements;
  }

  return (
    <section
      className={`${styles.container} section-container`}
      style={{
        backgroundImage: `url(${(background_image as any).url})`,
      }}
    >
      <div className="section-content mobile-column">
        <span className={`${styles.title} vertical-title`}>
          <Text elements={title} />
        </span>
        <div>
          {elements.map((item, index) => (
            <ImpactItem data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ImpactBannerContainer = createFragmentContainer(
  singleFragmentComponent(ImpactBanner),
  {
    data: graphql`
      fragment ImpactBanner_data on Impact_section {
        title
        icons {
          __typename
          ... on Icon_list {
            elements {
              ...ImpactItem_data
            }
          }
        }
        background_image
      }
    `,
  }
);
