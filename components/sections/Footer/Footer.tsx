// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Footer.types";
import styles from "./Footer.scss";

// External
import DocumentLink from "components/DocumentLink";

const Footer: FC<Props> = (props) => (
  <footer>
    <ul>
      {props.navigation_links.map((link, index) => (
        <li key={index}>
          <DocumentLink id={link.link._meta.id}>{link.text}</DocumentLink>
        </li>
      ))}
    </ul>
  </footer>
);

Footer.displayName = "Footer";

export default createFragmentContainer(singleFragmentComponent(Footer), {
  data: graphql`
    fragment Footer_data on Footer {
      social_networks {
        image
        link {
          ... on _ExternalLink {
            url
          }
        }
      }
      action_buttons {
        text
        link {
          ... on _Document {
            _meta {
              id
            }
          }
        }
      }
      navigation_links {
        text
        link {
          ... on _Document {
            _meta {
              id
            }
          }
        }
      }
    }
  `,
});
