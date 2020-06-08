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
  <section className={styles.section}>
    <article className={styles.founder}>
      {/* <h1>{props.section_title}</h1> */}
      <div>
        <img
          className={styles.founderPicture}
          src={(props.founder_picture as any).url}
        />
      </div>
      <div className={styles.founderInformation}>
        <Text elements={props.founder_information} />
      </div>
    </article>
  </section>
);

Founder.displayName = "Founder";

export default createFragmentContainer(singleFragmentComponent(Founder), {
  data: graphql`
    fragment Founder_data on Founder {
      founder_information
      founder_picture
    }
  `,
});
