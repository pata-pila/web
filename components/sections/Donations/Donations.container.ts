import { createFragmentContainer, graphql } from "react-relay";
import { Donations } from "./Donations";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(Donations), {
  data: graphql`
    fragment Donations_data on Donations {
      donation_link {
        ... on _ExternalLink {
          url
        }
      }
    }
  `,
});
