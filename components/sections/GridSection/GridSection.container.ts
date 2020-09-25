import { createFragmentContainer, graphql } from "react-relay";
import GridSection from "./GridSection";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(GridSection), {
  data: graphql`
    fragment GridSection_data on Grid_section {
      section_title
      section_title_color
      grid_section_title
      grid_section_subtitle
      grid_items {
        grid_item_image
      }
    }
  `,
});
