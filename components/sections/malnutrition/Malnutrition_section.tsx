// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Malnutrition_section.types";
import css from "./Malnutrition_section.scss";

// External
import Text from "../../text";

export const Malnutrition_section: FC<Props> = (props) => (
  <section
    className={css.Malnutrition_section}
    style={{
      //backgroundImage: `url(${(props.Malnutrition_section_image as any).url})`,
    }}
  >
    <article>
      <Text elements={props} />
    </article>
  </section>
);

export const MalnutritionSectionContainer = createFragmentContainer(
    singleFragmentComponent(Malnutrition_section),
    {
      data: graphql`
        fragment MalnutritionSection_data on Malnutrition_section {
          malnutrition_title
        }
      `,
    }
  );