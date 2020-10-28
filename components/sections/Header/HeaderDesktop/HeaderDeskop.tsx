// React/Relay
import React, { FC } from "react";
import classnames from "classnames";
import { useRouteByDocumentId } from "lib/RoutesContext";

// Component
import { Props } from "./HeaderDesktop.types";
import styles from "./HeaderDesktop.scss";
import DocumentLink from "components/DocumentLink";

export const Header: FC<Props> = (props) => {
  const routeByDocumentId = useRouteByDocumentId();
  const { path } = props;
  return (
    <section className={styles.container}>
      <div
        className={classnames("section-content", styles.headerSectionContainer)}
      >
        <div className={styles.headerContainer}>
          <a href="/">
            <img
              className={styles.icon}
              src={(props.pata_pila_icon as any).url}
              alt="Pata Pila"
            />
          </a>
        </div>
        <div className={styles.column}>
          <div className={styles.socialMedia}>
            {props.social_media.map((socialMedia, index) => {
              return (
                <a
                  className={styles.socialIcon}
                  key={index}
                  href={
                    socialMedia.social_link &&
                    (socialMedia.social_link as any).url
                  }
                  target="_blank"
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
          <div className={styles.linksContainer}>
            {props.header_links.map((link, index) => {
              const documentId = link.link_document?._meta.id;
              const route = routeByDocumentId.get(documentId) ?? "";
              return (
                <DocumentLink
                  key={index}
                  documentId={link.link_document?._meta.id}
                  className={classnames(
                    styles.link,
                    route === path && styles.selected
                  )}
                >
                  {link.link_title[0].text}
                </DocumentLink>
              );
            })}
            {props.action_buttons.map((button, index) => {
              return (
                <DocumentLink
                  key={index}
                  className={styles.actionButton}
                  style={{
                    backgroundColor: button.background_color ?? "transparent",
                    borderColor: button.border_color ?? "black",
                    color: button.text_color ?? "black",
                  }}
                  documentId={button.action._meta.id}
                >
                  {button.action_title[0].text}
                </DocumentLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
