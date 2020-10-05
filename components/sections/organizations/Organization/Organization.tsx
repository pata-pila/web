// React/Relay
import React, { FC } from "react";

// Component
import { Props } from "./Organization.types";
import styles from "./Organization.scss";

// External
import TeamMember from "../TeamMember";

export const Organization: FC<Props> = (props) => (
  <div>
    <h2 className={styles.organizationName}>{props.organization_name}</h2>
    <div className={styles.organization}>
      {props.members.map((item, index) => (
        <div className={styles.teamMember}>
          <TeamMember name={item.name} position={item.position} key={index} />
        </div>
      ))}
    </div>
  </div>
);

Organization.displayName = "Organization";
