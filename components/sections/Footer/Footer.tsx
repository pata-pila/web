// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "lib/singleFragmentComponent";

// Component
import { Props } from "./Footer.types";
import styles from "./Footer.scss";

// External
import DocumentLink from "components/DocumentLink";
import { PrismicImage } from "lib/prismicTypes";

const Footer: FC<Props> = (props) => {
  const pataPilaIcon = props.pata_pila_icon as PrismicImage;
  return (
    <footer className={styles.footerRoot}>
      <div>
        <img
          src={pataPilaIcon.url}
          alt={pataPilaIcon.alt}
          className={styles.logo}
        />
      </div>
      <ul className={styles.actionButtonList}>
        {props.action_buttons.map((link, index) => (
          <li key={index} className={styles.actionButtonItem}>
            <DocumentLink
              className={styles.actionButton}
              documentId={link.link._meta.id}
            >
              {link.text}
            </DocumentLink>
          </li>
        ))}
      </ul>
      <ul className={styles.navigationLinkList}>
        {props.navigation_links.map((link, index) => (
          <li key={index} className={styles.navigationLinkItem}>
            <DocumentLink
              className={styles.navigationLink}
              documentId={link.link._meta.id}
            >
              {link.text}
            </DocumentLink>
          </li>
        ))}
      </ul>
      <ul className={styles.socialNetworkList}>
        {props.social_networks.map((socialNetwork, index) => {
          const image = socialNetwork.image as PrismicImage;
          return (
            <li key={index} className={styles.socialNetworkItem}>
              <a href={socialNetwork.link.url}>
                <img
                  className={styles.socialNetworkImage}
                  src={image.url}
                  alt={image.alt}
                />
              </a>
            </li>
          );
        })}
      </ul>
      <small className={styles.copyright}>
        All rights reserved © 2020 Pata Pila Asociación Civil
      </small>
    </footer>
  );
};

Footer.displayName = "Footer";

export default createFragmentContainer(singleFragmentComponent(Footer), {
  data: graphql`
    fragment Footer_data on Footer {
      pata_pila_icon
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
