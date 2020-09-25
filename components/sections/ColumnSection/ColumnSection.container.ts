import { createFragmentContainer, graphql } from "react-relay";
import ColumnSection from "./ColumnSection";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(ColumnSection), {
  data: graphql`
    fragment ColumnSection_data on Column_section {
      section_title
      section_background
      section_title_color
      body {
        ... on Column_sectionBodyImage_section {
          primary {
            subsection_image
          }
        }
        ... on Column_sectionBodyParagraph_subsection {
          primary {
            subsection_paragraph
          }
        }
      }
    }
  `,
});
