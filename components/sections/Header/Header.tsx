// React/Relay
import React, { FC, useContext } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import { ReactRelayContext } from "react-relay";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { Responsive } from "../../Responsive";

const Header = (props: any) => {
  const context: any = useContext(ReactRelayContext);
  return (
    <Responsive
      path={context.url.asPath}
      {...props}
      mobile={HeaderMobile}
      tablet={HeaderMobile}
      desktop={HeaderDesktop}
    />
  );
};

export const HeaderContainer = createFragmentContainer(
  singleFragmentComponent(Header),
  {
    data: graphql`
      fragment Header_data on Header {
        pata_pila_icon
        social_media {
          social_icon
          social_name
          social_link {
            _linkType
            ... on _ExternalLink {
              url
            }
          }
        }
        header_links {
          link_title
          link_document {
            ... on _Document {
              _meta {
                id
              }
            }
          }
        }
        action_buttons {
          background_color
          border_color
          text_color
          mobile_background_color
          mobile_border_color
          mobile_text_color
          action_title
          action {
            ... on _Document {
              _meta {
                id
              }
            }
          }
        }
      }
    `,
  }
);
