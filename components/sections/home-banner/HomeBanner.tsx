// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./HomeBanner.types";
import styles from "./HomeBanner.scss";

// External
import Text from "../../text";

export const HomeBanner: FC<Props> = (props) => (
  <section
    className={styles.homeBanner}
    style={{
      backgroundImage: `url(${(props.banner_image as any).url})`,
    }}
  >
    <div className={styles.textWithGradient}>
      <div className={styles.gradient} />
      <div className={styles.textWrapper}>
        <div className="section-content">
          <article>
            <Text elements={props.banner_text} />
          </article>
        </div>
      </div>
    </div>
  </section>
);

HomeBanner.displayName = "HomeBanner";

export const HomeBannerContainer = createFragmentContainer(
  singleFragmentComponent(HomeBanner),
  {
    data: graphql`
      fragment HomeBanner_data on Home_banner {
        banner_text
        banner_image
      }
    `,
  }
);
