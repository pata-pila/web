// React/Relay
import React, { FC, useState } from "react";
import classnames from "classnames";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./IconTabs.types";
import styles from "./IconTabs.scss";

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
export const IconTabs: FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { section_title, icon_tabs, section_background_color } = props;
  return (
    <section
      className={`${styles.container} section-container`}
      style={{
        backgroundColor: section_background_color,
      }}
    >
      <div className="section-content mobile-column">
        <span className="vertical-title">{section_title[0].text}</span>
        <div className={classnames(styles.tabs, styles.webContent)}>
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
        <div className={classnames(styles.tabs, styles.mobileContent)}>
          {icon_tabs.map((tab, index) => (
            <div key={index} className={styles.tabContainer}>
              <span className={styles.tabTitle}>{tab.tab_title[0].text}</span>
              <Content
                image={(tab.tab_image as any).url}
                description={tab.tab_description[0].text}
                link={tab.tab_link.url}
              />
            </div>
          ))}
        </div>
        <Content
          className={styles.webContent}
          image={(icon_tabs[selectedTab].tab_image as any).url}
          description={icon_tabs[selectedTab].tab_description[0].text}
          link={icon_tabs[selectedTab].tab_link.url}
        />
      </div>
    </section>
  );
};

export const IconTabsContainer = createFragmentContainer(
  singleFragmentComponent(IconTabs),
  {
    data: graphql`
      fragment IconTabs_data on Icon_tabs_section {
        section_title
        section_background_color
        icon_tabs {
          tab_icon
          tab_image
          tab_link {
            _linkType
            ... on _ExternalLink {
              url
            }
          }
          tab_title
          tab_description
        }
      }
    `,
  }
);
