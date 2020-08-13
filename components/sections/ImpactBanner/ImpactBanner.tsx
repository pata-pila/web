// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./ImpactBanner.types";
import styles from "./ImpactBanner.scss";
import { ImpactItemContainer as ImpactItem } from "./components/ImpactItem/ImpactItem";

export const ImpactBanner: FC<Props> = (props) => {
  const { section_title, icon_list_elements, background_image } = props;
  return (
    <section
      className={`${styles.container} section-container`}
      style={{
        backgroundImage: `url(${(background_image as any).url})`,
      }}
    >
      <div className="section-content mobile-column">
        <span className={`${styles.title} vertical-title`}>{section_title[0].text}</span>
        <div>
          {icon_list_elements.map((item, index) => (
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
      fragment ImpactBanner_data on Icon_list {
        section_title
        icon_list_elements {
          ...ImpactItem_data
        }
        background_image
      }
    `,
  }
);
