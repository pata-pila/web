// React/Relay
import React, { FC } from "react";

// Component
import { Props } from "./HeaderDesktop.types";
import styles from "./HeaderDesktop.scss";

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