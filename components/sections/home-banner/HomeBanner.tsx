// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./HomeBanner.types";
import css from "./HomeBanner.scss";

// External
import Text from "../../text";

export const HomeBanner: FC<Props> = (props) => (
  <section
    className={css.homeBanner}
    style={{
      backgroundImage: `url(${(props.banner_image as any).url})`,
    }}
  >
    <article>
      <Text elements={props.banner_text} />
    </article>
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
