// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./TeamMembersList.types";
import styles from "./TeamMembersList.scss";

// External
import TeamMember from "./TeamMember";

export const TeamMembersList: FC<any> = (props) => (
  <section>
    {JSON.stringify(props)}
    {/* {props.member.map((item, index) => (
      // <TeamMember data={item} key={index} />
      item.name
    ))} */}
  </section>
);

TeamMembersList.displayName = "TeamMembersList";

// export const TeamMembersListContainer = createFragmentContainer(
//   singleFragmentComponent(TeamMembersList),
//   {
//     data: graphql`
//       fragment TeamMembersList_data on Team_members_list {
//         ...TeamMember_data
//       }
//     `,
//   }
// );

export const TeamMembersListContainer = createFragmentContainer(
  singleFragmentComponent(TeamMembersList),
  {
    data: graphql`
      fragment TeamMembersList_data on Team_members_list {
        member {
          name
          position
        }
      }
    `,
  }
);
