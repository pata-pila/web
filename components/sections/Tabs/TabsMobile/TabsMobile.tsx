// React/Relay
import React, { PureComponent } from "react";

// Component
import { Props } from "../Tabs.types";
import styles from "./TabsMobile.scss";

// External
import Text from "../../../text";

export class TabsMobile extends PureComponent<Props, { selectedTab: number }> {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  public render() {
    const { tabs_list } = this.props;

    return (
      <section className={styles.tabs}>
        {tabs_list.map((tab, index) => (
          <div
            className={styles.item}
            style={{
              backgroundColor: tab.content_background_color,
            }}
          >
            <div key={index} className={styles.name}>
              {tab.name}
            </div>
            <div
              key={index}
              className={styles.content}
              style={{
                color: tab.content_color,
              }}
            >
              <Text elements={tab.content} />
            </div>
          </div>
        ))}
      </section>
    );
  }
}
