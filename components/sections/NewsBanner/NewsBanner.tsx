// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./NewsBanner.types";
import styles from "./NewsBanner.scss";

export const NewsBanner: FC<Props> = (props) => {
  const { articles_list } = props;
  return (
    <section className={`${styles.container} section-container`}>
      <div className={classnames("section-content", styles.sectionContainer)}>
        {articles_list?.map((item, index) => (
          <div key={index} className={styles.articleContainer}>
            <div
              className={styles.articleImage}
              style={{
                backgroundImage: `url(${(item.article_image as any).url})`,
              }}
            />
            <div className={styles.infoContainer}>
              <div>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.newspaperIcon}
                    src={(item.newspaper_icon as any).url}
                  />
                </div>
                <h6 className={styles.articleTitle}>
                  {item.article_title[0].text}
                </h6>
              </div>
              <a
                className={styles.linkButton}
                href={item.article_url.url}
                target="_blank"
              >
                Ver noticia
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const NewsBannerContainer = createFragmentContainer(
  singleFragmentComponent(NewsBanner),
  {
    data: graphql`
      fragment NewsBanner_data on News_banner {
        articles_list {
          article_image
          newspaper_icon
          article_title
          article_url {
            ... on _ExternalLink {
              url
            }
            ... on _Document {
              _meta {
                id
              }
            }
          }
        }
      }
    `,
  }
);
