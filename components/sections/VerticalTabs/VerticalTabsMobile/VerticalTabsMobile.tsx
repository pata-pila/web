// React/Relay
import React, { PureComponent } from "react";
import classnames from "classnames";

// Component
import { Props } from "../VerticalTabs.types";
import styles from "./VerticalTabsMobile.scss";

// External
import Text from "../../../text";

export class VerticalTabsMobile extends PureComponent<
  Props,
  { selectedTab: number }
> {
  constructor(props) {
    super(props);
    this.state = { selectedTab: undefined };
  }

  private selectTab(index: number): void {
    this.setState({
      selectedTab: index !== this.state.selectedTab ? index : undefined,
    });
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
          <div className={styles.sectionName}>{section_name}</div>
          <div className={styles.content}>
            <div className={styles.tabsName}>
              {tabs_list.map((tab, index) => (
                <>
                  <div
                    className={classnames(styles.tabName, {
                      [styles.selectedTabName]: this.isSelectedTab(index),
                    })}
                    onClick={() => this.selectTab(index)}
                    key={`tab-name-${index}`}
                  >
                    <div>{tab.name}</div>
                    <div className={styles.icon}>
                      {this.isSelectedTab(index) ? (
                        <img className={styles.iconImg} src="/assets/arrow-down.png" />
                      ) : (
                        "+"
                      )}
                    </div>
                  </div>
                  <div
                    className={styles.tabContent}
                    style={{
                      display: this.isSelectedTab(index) ? "block" : "none",
                    }}
                    key={`tab-content-${index}`}
                  >
                    <Text elements={tab.content} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
