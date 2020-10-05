// React/Relay
import React, { FC } from "react";
import moment from "moment";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./Story.types";
import styles from "./Story.scss";
import Text from "../../text";

moment.locale("es");

export const Story: FC<Props> = (props) => (
  <section className={`${styles.section} section-container`}>
    <div className={"section-content mobile-column"}>
      <span className={classnames("vertical-title", styles.section_title)}>
        {props.section_title[0].text}
      </span>
      <div className={styles.story}>
        <div className={styles.story}>
          <div className={styles.date}>
            {moment(props.date, "YYYY-MM-DD").format("MMMM YYYY")}
          </div>
          <div className={styles.title}>{props.title[0].text}</div>
          <article className={styles.article}>
            <Text elements={props.article} />
          </article>
        </div>
      </div>
    </div>
  </section>
);

export const StoryContainer = createFragmentContainer(
  singleFragmentComponent(Story),
  {
    data: graphql`
      fragment Story_data on Story_section {
        section_title
        title
        date
        article
      }
    `,
  }
);
