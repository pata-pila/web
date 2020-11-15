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
      <Text elements={content} />
      {link && (
        <DocumentLink className={styles.readMoreButton} graphqlLink={link}>
          Leer mas
        </DocumentLink>
      )}
    </div>
  );
};
