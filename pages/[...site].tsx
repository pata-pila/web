import React, { Component } from "react";
import Head from "next/head";
import { graphql } from "react-relay";
import withData from "../lib/withData";
import { RoutesContextProvider } from "lib/RoutesContext";
import Error from "next/error";

import * as sections from "components/sections";

import { RelayProp } from "react-relay";
import { SiteQueryResponse } from "types/SiteQuery.graphql";

export interface Props extends SiteQueryResponse {
  relay: RelayProp;
  data: any;
}

import "../styles/global.scss";

class Site extends Component<Props> {
  static query = graphql`
    query SiteQuery($where: WhereLanding) {
      routes: allLandings {
        edges {
          node {
            route
            _meta {
              id
            }
          }
        }
      }
      allLandings(where: $where) {
        edges {
          node {
            sections {
              section {
                __typename
                ... on Home_banner {
                  ...HomeBanner_data
                }
                ... on Story_section {
                  ...Story_data
                }
                ... on Impact_section {
                  ...ImpactSection_data
                }
                ... on Impact_statistics {
                  ...ImpactStatistics_data
                }
                ... on Presentation {
                  ...Presentation_data
                }
                ... on Organizations {
                  ...Organizations_data
                }
                ... on News_banner {
                  ...NewsBanner_data
                }
                ... on Card {
                  ...Card_data
                }
                ... on Donations {
                  ...Donations_data
                }
                ... on Tabs {
                  ...Tabs_data
                }
                ... on Vertical_tabs {
                  ...VerticalTabs_data
                }
                ... on Icon_tabs_section {
                  ...IconTabs_data
                }
                ... on Footer {
                  ...Footer_data
                }
                ... on Header {
                  ...Header_data
                }
                ... on Column_section {
                  ...ColumnSection_data
                }
                ... on Grid_section {
                  ...GridSection_data
                }
                ... on Text_card {
                  ...TextCard_data
                }
              }
            }
          }
        }
      }
    }
  `;

  getRoutesContextProviderValue() {
    return new Map(
      this.props.routes.edges.map((edge) => [
        edge.node._meta.id,
        edge.node.route,
      ])
    );
  }

  render() {
    const { props } = this;

    if (props.allLandings.edges.length === 0) {
      return <Error statusCode={404} />;
    }

    return (
      <RoutesContextProvider value={this.getRoutesContextProviderValue()}>
        <Head>
          <title>Pata Pila</title>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLX2B8V');`
            }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Adamina|Nixie+One|Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLX2B8V"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {props.allLandings.edges[0].node.sections
            .filter(({ section }) => section.__typename in sections)
            .map(({ section }, index) => {
              const Container = sections[section.__typename];
              return <Container data={section} key={index} />;
            })}
        </main>
      </RoutesContextProvider>
    );
  }
}

export default withData(Site, {
  query: Site.query,
  setupVars: (ctx) => ({ where: { route: ctx.asPath } }),
});
