// React/Relay
import React, { FC, useState } from "react";
import classnames from "classnames";
import { Content } from "../Content";

// Component
import { Props } from "../IconTabs.types";
import styles from "./IconTabsMobile.scss";

export const IconTabsMobile: FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const {
    section_title,
    icon_tabs,
    section_background_color,
    background_illustration,
    title_enlarged,
  } = props;
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: section_background_color,
      }}
    >
      {title_enlarged ? (
        <h1>{section_title[0].text}</h1>
      ) : (
        <div className={styles.title}>{section_title[0].text}</div>
      )}
      <div className={styles.sectionContent}>
        <div className={styles.tabs}>
          {icon_tabs.map((tab, index) => (
            <div
              key={index}
              className={classnames(styles.tab, {
                [styles.selected]: index === selectedTab,
              })}
              onClick={() => {
                if (selectedTab === index) {
                  setSelectedTab(null);
                } else {
                  setSelectedTab(index);
                }
              }}
            >
              <div className={styles.tabItem}>
                <div className={styles.tabTitle}>
                  <img
                    className={styles.tabIcon}
                    alt={tab.tab_title[0].text}
                    src={(tab.tab_icon as any).url}
                  />
                  <span>{tab.tab_title[0].text}</span>
                </div>
                <div className={styles.tabSelectedIcon}>
                  {index === selectedTab ? "▾" : "+"}
                </div>
              </div>
              <div key={index} className={styles.tabContent}>
                <Content
                  className={styles.tabContent}
                  content={tab.tab_content}
                  link={tab.tab_link}
                />
              </div>
            </div>
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
