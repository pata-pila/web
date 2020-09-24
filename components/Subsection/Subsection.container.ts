import { createFragmentContainer, graphql } from "react-relay";
import Subsection from "./Subsection";
import singleFragmentComponent from "../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(Subsection), {
  data: graphql`
    fragment Subsection_data on Subsection {
      __typename
      body {
        ... on SubsectionBodyImage_section {
          primary {
            subsection_image
          }
        }
        ... on SubsectionBodyParagraph_section {
          primary {
            subsection_paragraph
          }
        }
      }
    }
  `,
});
