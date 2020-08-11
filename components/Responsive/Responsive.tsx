import React from "react";

import styles from "./Response.scss";

export const Responsive = (props) => {
  const Mobile = props.mobile;
  const Tablet = props.tablet;
  const Desktop = props.desktop;
  const componentProps = { ...props };
  delete componentProps.mobile;
  delete componentProps.desktop;

  return (
    <>
      <div className={styles.mobile}>
        <Mobile {...componentProps} />
      </div>
      <div className={styles.tablet}>
        <Tablet {...componentProps} />
      </div>
      <div className={styles.desktop}>
        <Desktop {...componentProps} />
      </div>
    </>
  );
};
