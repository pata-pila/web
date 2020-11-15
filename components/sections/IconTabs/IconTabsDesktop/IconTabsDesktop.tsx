// React/Relay
import React, { FC, useState } from "react";
import classnames from "classnames";

// Component
import { Props } from "../IconTabs.types";
import styles from "./IconTabsDesktop.scss";
import { Content } from "../Content";

export const IconTabsDesktop: FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const {
    section_title,
    icon_tabs,
    section_background_color,
    background_illustration,
    title_enlarged,
  } = props;
  return (
    <section
      className={classnames(styles.container, "section-container")}
      style={{
        backgroundColor: section_background_color,
      }}
    >
      {title_enlarged ? <h1>{section_title[0].text}</h1> : null}
      <div className="section-content mobile-column">
        {!title_enlarged ? (
          <span className="vertical-title">{section_title[0].text}</span>
        ) : null}
        <div className={styles.tabs}>
          {icon_tabs.map((tab, index) => (
            <button
              key={index}
              className={classnames(styles.tab, {
                [styles.selected]: index === selectedTab,
              })}
              onClick={() => setSelectedTab(index)}
            >
              <div className={styles.tabInfo}>
                <img
                  className={styles.tabIcon}
                  alt={tab.tab_title[0].text}
                  src={(tab.tab_icon as any).url}
                />
                <span className={styles.tabTitle}>{tab.tab_title[0].text}</span>
              </div>
              <span className={styles.tabSelectedIcon}>❯</span>
            </button>
          ))}
        </div>
        <div className={styles.tabsContent}>
          {icon_tabs.map((tab, index) => (
            <Content
              key={index}
              className={classnames(styles.tabContent, {
                [styles.selected]: index === selectedTab,
              })}
              content={tab.tab_content}
              link={tab.tab_link}
            />
          ))}
        </div>
      </div>
      {background_illustration && (
        <img
          className={styles.illustration}
          src={(background_illustration as any).url}
        />
      )}
    </section>
  );
};
