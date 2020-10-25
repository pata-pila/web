// React/Relay
import React from "react";
import styles from "./Content.scss";
import Text from "../../../text";

export const Content = ({
  className,
  content,
  link,
}: {
  className?: string;
  content: any;
  link?: string;
}) => {
  return (
    <div className={className}>
      <Text elements={content} />
      {link && (
        <a className={styles.readMoreButton} href={link} target="_blank">
          Leer mas
        </a>
      )}
    </div>
  );
};
