// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import Text from "../../text";
// Component
import { Props } from "./Header.types";
import styles from "./Header.scss";

export const Header: FC<Props> = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.socialMedia}>
        {props.social_media.map((socialMedia, index) => {
          return (
            <a
              className={styles.socialIcon}
              key={index}
              href={
                socialMedia.social_link && (socialMedia.social_link as any).url
              }
            >
              <img
                src={
                  socialMedia.social_icon &&
                  (socialMedia.social_icon as any).url
                }
              />
            </a>
          );
        })}
      </div>
      <div className={styles.headerContainer}>
        <img
          className={styles.icon}
          src={(props.pata_pila_icon as any).url}
          alt="Pata Pila"
        />
        <div className={styles.linksContainer}>
          {props.header_links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.link_url && (link.link_url as any).url}
                className={styles.link}
              >
                {link.link_title[0].text}
              </a>
            );
          })}
          {props.action_buttons.map((button, index) => {
            return (
              <button
                key={index}
                className={styles.actionButton}
                style={{
                  backgroundColor: button.background_color ?? "transparent",
                  borderColor: button.border_color,
                  color: button.text_color,
                }}
              >
                {button.action_title[0].text}
              </button>
            );
          })}
        </div>
      </div>
    </section>
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
          link_url {
            _linkType
            ... on _ExternalLink {
              url
            }
          }
        }
        action_buttons {
          background_color
          border_color
          text_color
          action_title
          action {
            _linkType
            ... on _ExternalLink {
              url
            }
          }
        }
      }
    `,
  }
);
