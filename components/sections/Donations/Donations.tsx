// React/Relay
import React, { FC } from "react";
// Component
import { Props } from "./Donations.types";
import styles from "./Donations.scss";

const Donations: FC<Props> = (props) => (
  <section className={styles.section}>
    <iframe
      width="100%"
      height="1000px"
      name="iframe-name"
      id="iframe-id"
      src={props.donation_link.url}
      style={{ borderStyle: "none" }}
    ></iframe>
  </section>
);

export { Donations };
