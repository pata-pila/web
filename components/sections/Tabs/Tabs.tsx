// React/Relay
import React, { PureComponent } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./Tabs.types";
import styles from "./Tabs.scss";

// External
import Text from "../../text";

export class Tabs extends PureComponent<Props, { selectedTab: number }> {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  private selectTab(index: number): void {
    this.setState({ selectedTab: index });
  }

  private tabNameColor(index: number) {
    const { tabs_name_color, tabs_name_selected_color } = this.props;
    const { selectedTab } = this.state;

    if (selectedTab === index) {
      return tabs_name_selected_color ?? "#df8832";
    }

    return tabs_name_color ?? "#81a88f";
  }

  public render() {
    const { background_color, tabs_content_color, tabs_list } = this.props;
    const { selectedTab } = this.state;

    return (
      <section
        className={styles.tabs}
        style={{ backgroundColor: background_color ?? "#31683D" }}
      >
        <div className={styles.tabsName}>
          {tabs_list.map((tab, index) =>
            <div
              className={classnames(styles.tabName, {
                [styles.selectedTabName]: selectedTab === index
              })}
              style={{
                color: this.tabNameColor(index),
                borderBottomColor:
                  selectedTab === index ? this.tabNameColor(index) : undefined,
              }}
              onClick={() => this.selectTab(index)}
            >
              {tab.name}
            </div>
          )}
        </div>
        <div className={styles.tabsContent}>
          {tabs_list.map((tab, index) =>
            <div
              className={styles.tabTitle}
              style={{
                color: tabs_content_color ?? "#ffffff",
                display: selectedTab === index ? "block" : "none",
              }}
            >
              <Text elements={tab.content} />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export const TabsContainer = createFragmentContainer(
  singleFragmentComponent(Tabs),
  {
    data: graphql`
      fragment Tabs_data on Tabs {
        background_color
        tabs_name_color
        tabs_name_selected_color
        tabs_content_color
        tabs_list {
          name
          content
        }
      }
    `,
  }
);
