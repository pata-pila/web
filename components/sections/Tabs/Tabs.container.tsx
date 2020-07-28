import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import { TabsDesktop } from "./TabsDesktop";
import { TabsMobile } from "./TabsMobile";
import { Responsive } from "../../Responsive";

const Tabs = (props: any) => (
  <Responsive {...props} mobile={TabsMobile} desktop={TabsDesktop} />
);

export default createFragmentContainer(singleFragmentComponent(Tabs), {
  data: graphql`
    fragment Tabs_data on Tabs {
      background_color
      tabs_name_color
      tabs_name_selected_color
      tabs_list {
        name
        content
        content_color
        content_background_color
      }
    }
  `,
});
