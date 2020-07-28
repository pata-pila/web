import React, { FC } from "react";

import { Props } from "./TeamMember.types";
import styles from "./TeamMember.scss";

export const TeamMember: FC<Props> = (props) => (
  <div className={styles.member}>
    <div className={styles.name}>{props.name}</div>
    <div className={styles.position}>{props.position}</div>
  </div>
);
