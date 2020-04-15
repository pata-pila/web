/* tslint:disable */
/* eslint-disable */
/* @relayHash 90ff7b370c949d84d9e114f1c99f1b6f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WhereLanding = {
    title_fulltext?: string | null;
    route?: string | null;
    route_fulltext?: string | null;
};
export type SiteQueryVariables = {
    where?: WhereLanding | null;
};
export type SiteQueryResponse = {
    readonly allLandings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly sections: ReadonlyArray<{
                    readonly section: ({
                        readonly __typename: "Home_banner";
                        readonly " $fragmentRefs": FragmentRefs<"HomeBanner_data">;
                    } | {
                        readonly __typename: "Presentation";
                        readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
                    } | {
                        /*This will never be '%other', but we need some
                        value in case none of the concrete values match.*/
                        readonly __typename: "%other";
                    }) | null;
                }> | null;
            };
        } | null> | null;
    };
};
export type SiteQuery = {
    readonly response: SiteQueryResponse;
    readonly variables: SiteQueryVariables;
};



/*
query SiteQuery(
  $where: WhereLanding
) {
  allLandings(where: $where) {
    edges {
      node {
        sections {
          section {
            __typename
            ... on Home_banner {
              ...HomeBanner_data
            }
            ... on Presentation {
              ...Presentation_data
            }
          }
        }
      }
    }
  }
}

fragment HomeBanner_data on Home_banner {
  banner_text
  banner_image
}

fragment Presentation_data on Presentation {
  content
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "WhereLanding",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SiteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLandings",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LandingConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LandingConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Landing",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sections",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LandingSections",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "section",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "type": "Home_banner",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "HomeBanner_data",
                                "args": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Presentation",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "Presentation_data",
                                "args": null
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SiteQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLandings",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LandingConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LandingConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Landing",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sections",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LandingSections",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "section",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "type": "Home_banner",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "banner_text",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "banner_image",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Presentation",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "content",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SiteQuery",
    "id": null,
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment Presentation_data on Presentation {\n  content\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '159a06ee83443d2c9704527e420e01a4';
export default node;
