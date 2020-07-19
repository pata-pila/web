import React, { Component, FC } from "react";
import Head from "next/head";
import { graphql } from "react-relay";
import withData from "../lib/withData";
import Error from "next/error";

import * as sections from "components/sections";

import { RelayProp } from "react-relay";
// import { SiteQueryResponse } from "types/SiteQuery.graphql";

export interface Props extends SiteQueryResponse {
  relay: RelayProp;
  data: any;
}

import "../styles/global.scss";

class Site extends Component<Props> {
  static query = graphql`
    query SiteQuery($where: WhereLanding) {
      allLandings(where: $where) {
        edges {
          node {
            sections {
              section {
                __typename
                ... on Home_banner {
                  ...HomeBanner_data
                }
                ... on Icon_list {
                  ...ImpactBanner_data
                }
                ... on Presentation {
                  ...Presentation_data
                }
                ... on News_banner {
                  ...NewsBanner_data
                }
                ... on Founder {
                  ...Founder_data
                }
                ... on Tabs {
                  ...Tabs_data
                }
                ...on Vertical_tabs {
                  ...VerticalTabs_data
                }
                ... on Icon_tabs_section {
                  ...IconTabs_data
                }
              }
            }
          }
        }
      }
    }
  `;

  render() {
    const { props } = this;

    if (props.allLandings.edges.length === 0) {
      return <Error statusCode={404} />;
    }

    return (
      <>
        <Head>
          <title>Pata Pila</title>
          <link
            href="https://fonts.googleapis.com/css?family=Adamina|Nixie+One|Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          {props.allLandings.edges[0].node.sections
            .filter(({ section }) => section.__typename in sections)
            .map(({ section }, index) => {
              const Container = sections[section.__typename];
              return <Container data={section} key={index} />;
            })}
        </main>
      </>
    );
  }
}

export default withData(Site, {
  query: Site.query,
  setupVars: (ctx) => ({ where: { route: ctx.asPath } }),
});
