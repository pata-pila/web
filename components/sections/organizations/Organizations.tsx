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
  <section className={styles.section}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{props.section_name}</h1>
    </div>
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
            __typename
            ... on Organization {
              ...Organization_data
            }
          }
        }
      }
    `,
  }
);
