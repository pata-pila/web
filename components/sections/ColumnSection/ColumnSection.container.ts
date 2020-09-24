import { createFragmentContainer, graphql } from "react-relay";
import ColumnSection from "./ColumnSection";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(ColumnSection), {
  data: graphql`
    fragment ColumnSection_data on Column_section {
      section_title
      section_background
      subsections_list {
        subsection {
          __typename
          ... on Subsection {
            ...Subsection_data
          }
        }
      }
    }
  `,
});
