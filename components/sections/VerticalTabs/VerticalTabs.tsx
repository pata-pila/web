// React/Relay
import React, { PureComponent } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./VerticalTabs.types";
import styles from "./VerticalTabs.scss";

// External
import Text from "../../text";

export class VerticalTabs extends PureComponent<
  Props,
  { selectedTab: number }
> {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  private selectTab(index: number): void {
    this.setState({ selectedTab: index });
  }

  private isSelectedTab(index: number): boolean {
    const { selectedTab } = this.state;
    return selectedTab === index;
  }

  public render() {
    const { tabs_list, section_header, section_name } = this.props;

    return (
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <img src={(section_header as any).url} />
        </div>
        <div className={styles.middle}>
          <div className={styles.sectionName}>
            <span>{section_name}</span>
          </div>
          <div className={styles.content}>
            <div className={styles.tabsName}>
              {tabs_list.map((tab, index) => (
                <div
                  className={classnames(styles.tabName, {
                    [styles.selectedTabName]: this.isSelectedTab(index),
                  })}
                  onClick={() => this.selectTab(index)}
                >
                  <div>{tab.name}</div>
                  {this.isSelectedTab(index) && (
                    <div className={styles.icon}>❯</div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.tabsContent}>
              {tabs_list.map((tab, index) => (
                <div
                  className={styles.tabTitle}
                  style={{
                    display: this.isSelectedTab(index) ? "block" : "none",
                  }}
                  key={index}
                >
                  <Text elements={tab.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const VerticalTabsContainer = createFragmentContainer(
  singleFragmentComponent(VerticalTabs),
  {
    data: graphql`
      fragment VerticalTabs_data on Vertical_tabs {
        section_name
        section_header
        tabs_list {
          name
          content
        }
      }
    `,
  }
);
