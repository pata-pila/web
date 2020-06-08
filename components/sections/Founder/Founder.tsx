// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Founder.types";
import styles from "./Founder.scss";

// External
import Text from "../../text";

const Founder: FC<Props> = (props) => (
  <section>
    <article>
      {props.__typename}
      {/* <h1>{props.section_title}</h1> */}
      {/* <img
        className={styles.founderPicture}
        src={(props.founder_picture as any).url}
      />
      <Text elements={props.founder_information} /> */}
    </article>
  </section>
);

Founder.displayName = "Founder";

export default createFragmentContainer(singleFragmentComponent(Founder), {
  data: graphql`
    fragment Founder_data on Founder {
      __typename
      section_title
    }
  `,
});
