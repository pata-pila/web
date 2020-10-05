import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../../lib/singleFragmentComponent";
import { Organization } from "./Organization";

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