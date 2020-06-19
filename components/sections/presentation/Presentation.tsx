// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Presentation.types";
import css from "./Presentation.scss";

// External
import Text from "../../text";

export const Presentation: FC<Props> = (props) => (
  <section className={css.presentation}>
    <Text elements={props.name} />
  </section>
);

Presentation.displayName = "HomeBanner";

export const PresentationContainer = createFragmentContainer(
  singleFragmentComponent(Presentation),
  {
    data: graphql`
      fragment Presentation_data on Presentation {
        name
      }
    `,
  }
);
