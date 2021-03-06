// React/Relay
import React, { FC, useState } from "react";
import classnames from "classnames";
import { useRouteByDocumentId } from "lib/RoutesContext";

// Component
import { Props } from "./HeaderMobile.types";
import styles from "./HeaderMobile.scss";
import DocumentLink from "components/DocumentLink";

export const Header: FC<Props> = (props) => {
  const [isMenuOpened, openMenu] = useState(false);
  const routeByDocumentId = useRouteByDocumentId();
  const { path } = props;
  return (
    <div className={styles.mobileContainer}>
      <a href="/">
        <img
          className={styles.icon}
          src={(props.pata_pila_icon as any).url}
          alt="Pata Pila"
        />
      </a>
      <button className={styles.menuButton} onClick={() => openMenu(true)}>
        <img
          className={styles.menuIcon}
          src="/assets/menu.png"
          alt="Pata Pila"
        />
      </button>
      {isMenuOpened && (
        <div className={styles.menuLayer}>
          <div className={styles.menuHeader}>
            <a href="/">
              <img
                className={styles.icon}
                src={(props.pata_pila_icon as any).url}
                alt="Pata Pila"
              />
            </a>
            <button
              className={styles.closeButton}
              onClick={() => openMenu(false)}
            >
              X
            </button>
          </div>

          <div className={styles.links}>
            {props.header_links.map((link, index) => {
              const documentId = link.link_document?._meta.id;
              const route = routeByDocumentId.get(documentId) ?? "";
              return (
                <DocumentLink
                  key={index}
                  graphqlLink={link.link_document}
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
                    backgroundColor:
                      button.mobile_background_color ?? "transparent",
                    borderColor: button.mobile_border_color ?? "black",
                    color: button.mobile_text_color ?? "black",
                  }}
                  graphqlLink={button.action}
                >
                  {button.action_title[0].text}
                </DocumentLink>
              );
            })}
          </div>
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
        </div>
      )}
    </div>
  );
};
