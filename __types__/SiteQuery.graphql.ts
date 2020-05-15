/* tslint:disable */
/* eslint-disable */
/* @relayHash 47fb98a57a7d37246cb846bafd9a8177 */

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
                        readonly __typename: "Icon_list";
                        readonly " $fragmentRefs": FragmentRefs<"ImpactBanner_data">;
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
            ... on Icon_list {
              ...ImpactBanner_data
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

fragment ImpactBanner_data on Icon_list {
  section_title
  icon_list_elements {
    ...ImpactItem_data
  }
  background_image
}

fragment ImpactItem_data on Icon_listIcon_list_elements {
  title
  subtitle
  icon
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
                            "type": "Icon_list",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "ImpactBanner_data",
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
                            "type": "Icon_list",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "section_title",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "icon_list_elements",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Icon_listIcon_list_elements",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "title",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "subtitle",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "icon",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "background_image",
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
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Icon_list {\n              ...ImpactBanner_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment ImpactBanner_data on Icon_list {\n  section_title\n  icon_list_elements {\n    ...ImpactItem_data\n  }\n  background_image\n}\n\nfragment ImpactItem_data on Icon_listIcon_list_elements {\n  title\n  subtitle\n  icon\n}\n\nfragment Presentation_data on Presentation {\n  content\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f183b744df357c309384120a5d7be99d';
export default node;
