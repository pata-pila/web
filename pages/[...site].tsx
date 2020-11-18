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
          <link
            href="https://fonts.googleapis.com/css?family=Adamina|Nixie+One|Raleway&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '230062738360481');
      fbq('track', 'PageView');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=230062738360481&ev=PageView&noscript=1" />`,
            }}
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
      </RoutesContextProvider>
    );
  }
}

export default withData(Site, {
  query: Site.query,
  setupVars: (ctx) => ({ where: { route: ctx.asPath } }),
});
