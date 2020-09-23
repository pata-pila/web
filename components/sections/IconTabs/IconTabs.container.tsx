import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import { IconTabsDesktop } from "./IconTabsDesktop";
import { IconTabsMobile } from "./IconTabsMobile";
import { Responsive } from "../../Responsive";

const IconTabs = (props: any) => (
  <Responsive
    {...props}
    mobile={IconTabsMobile}
    tablet={IconTabsMobile}
    desktop={IconTabsDesktop}
  />
);

export const IconTabsContainer = createFragmentContainer(
  singleFragmentComponent(IconTabs),
  {
    data: graphql`
      fragment IconTabs_data on Icon_tabs_section {
        section_title
        section_background_color
        icon_tabs {
          tab_icon
          tab_image
          tab_link {
            _linkType
            ... on _ExternalLink {
              url
            }
          }
          tab_title
          tab_description
        }
      }
    `,
  }
);
