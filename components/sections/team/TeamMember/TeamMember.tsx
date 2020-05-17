// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../../lib/singleFragmentComponent";

// Component
// import { Props } from "./TeamMember.types";
import styles from "./TeamMember.scss";

export const TeamMember: FC<any> = (props) => (
  <section>
    <div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.position}>{props.position}</div>
    </div>
  </section>
);

TeamMember.displayName = "TeamMember";

// export const TeamMemberContainer = createFragmentContainer(
//   singleFragmentComponent(TeamMember),
//   {
//     data: graphql`
//     fragment TeamMember_data on TeamMembersListMember {
//       name
//       position
//     }
//   `,
//   }
// );