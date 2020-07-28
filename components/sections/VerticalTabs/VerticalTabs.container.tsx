import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import { VerticalTabsDesktop } from "./VerticalTabsDesktop";
import { VerticalTabsMobile } from "./VerticalTabsMobile";
import { Responsive } from "../../Responsive";

const VerticalTabs = (props: any) => (
  <Responsive
    {...props}
    mobile={VerticalTabsMobile}
    desktop={VerticalTabsDesktop}
  />
);

export default createFragmentContainer(singleFragmentComponent(VerticalTabs), {
  data: graphql`
    fragment VerticalTabs_data on Vertical_tabs {
      section_name
      section_header
      tabs_list {
        name
        content
      }
    }
  `,
});
