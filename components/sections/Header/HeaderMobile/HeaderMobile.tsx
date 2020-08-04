// React/Relay
import React, { FC, useState } from "react";

// Component
import { Props } from "./HeaderMobile.types";
import styles from "./HeaderMobile.scss";
import DocumentLink from "components/DocumentLink";

export const Header: FC<Props> = (props) => {
  const [isMenuOpened, openMenu] = useState(false);
  return (
    <div className={styles.mobileContainer}>
      <img
        className={styles.icon}
        src={(props.pata_pila_icon as any).url}
        alt="Pata Pila"
      />
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
              return (
                <DocumentLink
                  key={index}
                  documentId={link.link_document?._meta.id}
                  className={styles.link}
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
                  documentId={button.action._meta.id}
                >
                  {button.action_title[0].text}
                </DocumentLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
