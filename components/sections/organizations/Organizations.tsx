// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./Organizations.types";
import styles from "./Organizations.scss";

// External
import Organization from "./Organization";

export const Organizations: FC<Props> = (props) => (
  <section className={`${styles.section} section-container`}>
    <div className="section-content mobile-column">
      <span className="vertical-title">{props.section_name}</span>
      <div className={styles.organizations}>
        {props.organizations.map((item, index) => (
          <div className={styles.organizationWrapper} key={index}>
            <Organization data={item.organization} />
            {index + 1 < props.organizations.length && (
              <hr className={styles.line} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

Organizations.displayName = "Organizations";

export const OrganizationsContainer = createFragmentContainer(
  singleFragmentComponent(Organizations),
  {
    data: graphql`
      fragment Organizations_data on Organizations {
        section_name
        organizations {
          organization {
            ...Organization_data
          }
        }
      }
    `,
  }
);
