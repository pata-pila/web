// React/Relay
import React, { FC, useState } from "react";
import classnames from "classnames";

// Component
import { Props } from "../IconTabs.types";
import styles from "./IconTabsMobile.scss";

const Content = ({
  className,
  image,
  description,
  link,
}: {
  className?: string;
  image: string;
  description: string;
  link: string;
}) => {
  return (
    <div className={classnames(styles.tabContent, className)}>
      <img className={styles.tabImage} src={image} />
      <span className={styles.tabDescription}>{description}</span>
      <a className={styles.readMoreButton} href={link} target="_blank">
        Leer mas
      </a>
    </div>
  );
};
export const IconTabsMobile: FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const { section_title, icon_tabs, section_background_color } = props;
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: section_background_color,
      }}
    >
      <div className={styles.title}>{section_title[0].text}</div>
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
                  image={(tab.tab_image as any).url}
                  description={tab.tab_description[0].text}
                  link={tab.tab_link.url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
