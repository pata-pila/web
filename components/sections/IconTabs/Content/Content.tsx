// React/Relay
import React from "react";
import styles from "./Content.scss";
import Text from "../../../text";
import DocumentLink, { GraphqlLink } from "components/DocumentLink";

export const Content = ({
  className,
  content,
  link,
}: {
  className?: string;
  content: any;
  link?: GraphqlLink;
}) => {
  return (
    <div className={className}>
      <div className={styles.textWrapper}>
        <Text elements={content} />
      </div>
      {link && (
        <div className={styles.readMoreButtonWrapper}>
          <DocumentLink className={styles.readMoreButton} graphqlLink={link}>
            Leer mas
          </DocumentLink>
        </div>
      )}
    </div>
  );
};
