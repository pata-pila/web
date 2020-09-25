import React from "react";

import { Props } from "./ColumnSection.types";
import styles from "./ColumnSection.scss";
import Text from "../../text";

const ColumnSection = (props: Props) => {
  const {
    section_background,
    section_title,
    section_title_color,
    body,
  } = props;
  return (
    <section
      className={`${styles.container} section-container`}
      style={{ backgroundColor: section_background ?? "white" }}
    >
      <div className="section-content mobile-column">
        <span
          className="vertical-title"
          style={{ color: section_title_color ?? "black" }}
        >
          {section_title[0]?.text}
        </span>
        <div className={styles.subsectionsContainer}>
          {body.map((item, index) => {
            return (
              <div className={styles.subsection} key={index}>
                {item.primary.subsection_image ? (
                  <img
                    className={styles.image}
                    src={(item.primary.subsection_image as any)?.url}
                  />
                ) : (
                  <Text elements={item.primary.subsection_paragraph} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnSection;
