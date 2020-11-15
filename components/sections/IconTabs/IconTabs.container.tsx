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
        background_illustration
        title_enlarged
        icon_tabs {
          tab_icon
          tab_content
          tab_link {
            ... on _ExternalLink {
              url
            }
            ... on _Document {
              _meta {
                id
              }
            }
          }
          tab_title
        }
      }
    `,
  }
);
