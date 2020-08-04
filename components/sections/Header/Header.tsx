// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { Responsive } from "../../Responsive";

const Header = (props: any) => (
  <Responsive {...props} mobile={HeaderMobile} desktop={HeaderDesktop} />
);

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
