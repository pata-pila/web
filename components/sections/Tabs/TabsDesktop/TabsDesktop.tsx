// React/Relay
import React, { PureComponent } from "react";
import classnames from "classnames";

// Component
import { Props } from "../Tabs.types";
import styles from "./TabsDesktop.scss";

// External
import Text from "../../../text";

export class TabsDesktop extends PureComponent<Props, { selectedTab: number }> {
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
    const {
      background_color,
      tabs_name_selected_color,
      tabs_name_color,
      tabs_list,
    } = this.props;

    return (
      <section
        className={`${styles.tabs} section-container`}
        style={{ backgroundColor: background_color }}
      >
        <div className={styles.tabsName}>
          {tabs_list.map((tab, index) => (
            <div
              key={`tab-title-${index}`}
              className={classnames(styles.tabName, {
                [styles.selectedTabName]: this.isSelectedTab(index),
              })}
              style={{
                color: this.isSelectedTab(index)
                  ? tabs_name_selected_color
                  : tabs_name_color,
                borderBottomColor: tabs_name_selected_color,
              }}
              onClick={() => this.selectTab(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className={styles.tabsContent}>
          {tabs_list.map((tab, index) => (
            <div
              key={`tab-content-${index}`}
              className={classnames(styles.tabContent, {
                [styles.selectedTabContent]: this.isSelectedTab(index),
              })}
            >
              <Text elements={tab.content} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
