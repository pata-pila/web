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
    <article className={`${styles.founder} section-content mobile-column`}>
      <span className="vertical-title">{props.section_name}</span>
      <div className={styles.founderPicture}>
        <img src={(props.founder_picture as any).url} />
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
      section_name
      founder_information
      founder_picture
    }
  `,
});
