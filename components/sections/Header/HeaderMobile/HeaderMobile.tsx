// React/Relay
import React, { FC, useState } from "react";

// Component
import { Props } from "./HeaderMobile.types";
import styles from "./HeaderMobile.scss";

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
            <img
              className={styles.icon}
              src={(props.pata_pila_icon as any).url}
              alt="Pata Pila"
            />
            <button className={styles.closeButton} onClick={() => openMenu(false)}>
              X
            </button>
          </div>

          <div className={styles.links}>
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
                    backgroundColor: button.mobile_background_color ?? "transparent",
                    borderColor: button.mobile_border_color,
                    color: button.mobile_text_color,
                  }}
                >
                  {button.action_title[0].text}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
