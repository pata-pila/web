// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Organization.types";
import styles from "./Organization.scss";

// External
import TeamMember from "../TeamMember";

export const Organization: FC<Props> = (props) => (
  <div>
    <h2 className={styles.organizationName}>{props.organization_name}</h2>
    <div className={styles.organization}>
      <div className={styles.leftMembers}>
        {props.members
          .slice(0, Math.ceil(props.members.length / 2))
          .map((item, index) => (
            <TeamMember name={item.name} position={item.position} key={index} />
          ))}
      </div>
      <div className={styles.rightMembers}>
        <div> 
          {props.members
            .slice(Math.ceil(props.members.length / 2), props.members.length)
            .map((item, index) => (
              <TeamMember
                name={item.name}
                position={item.position}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  </div>
);

Organization.displayName = "Organization";

export const OrganizationContainer = createFragmentContainer(
  singleFragmentComponent(Organization),
  {
    data: graphql`
      fragment Organization_data on Organization {
        organization_name
        members {
          name
          position
        }
      }
    `,
  }
);
