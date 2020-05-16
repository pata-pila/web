import React, { Component, FC } from "react";
import Head from "next/head";
import { graphql } from "react-relay";
import withData from "../lib/withData";
import Error from "next/error";

//import * as sections from "components/malnutrition/sections";

import { RelayProp } from "react-relay";
import "../styles/global.scss";

import { malnutritionQueryResponse } from "types/malnutritionQuery.graphql";

export interface Props extends malnutritionQueryResponse {
    relay: RelayProp;
    data: any;
  }

class Malnutrition extends Component<Props> {
  static query = graphql`
    query malnutritionQuery($where: WhereMalnutrition) {
      allMalnutritions(where: $where) {
        edges {
          node {
            sections {
              section {
                __typename
                ... on Malnutrition_section {
                  ...MalnutritionSection_data
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

    if (props.allMalnutritions.edges.length === 0) {
      return <Error statusCode={404} />;
    }

    return (
      <div>
        <Head>
          <title>Pata Pila</title>
          <link
            href="https://fonts.googleapis.com/css?family=Adamina|Nixie+One|Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          Malnutrition
        </main>
      </div>
    );
  }
}

export default withData(Malnutrition, {
  query: Malnutrition.query,
  setupVars: (ctx) => ({ where: { route: ctx.asPath } }),
});
