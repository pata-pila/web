import React from "react";

import { Props } from "./GridSection.types";
import styles from "./GridSection.scss";

const GridSection = (props: Props) => {
  const {
    section_title,
    section_title_color,
    grid_section_title,
    grid_section_subtitle,
    grid_items,
  } = props;
  return (
    <section className={`${styles.container} section-container`}>
      <div className="section-content mobile-column">
        <span
          className="vertical-title"
          style={{ color: section_title_color ?? "black" }}
        >
          {section_title[0]?.text}
        </span>
        <div className={styles.content}>
          <h1 className={styles.title}>{grid_section_title[0]?.text}</h1>
          <span className={styles.subtitle}>
            {grid_section_subtitle[0]?.text}
          </span>
          <div className={styles.items}>
            {grid_items.map((item) => (
              <div className={styles.gridItem}>
                <img
                  className={styles.image}
                  src={(item.grid_item_image as any).url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
