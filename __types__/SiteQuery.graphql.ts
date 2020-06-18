/* tslint:disable */
/* eslint-disable */

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
                        readonly __typename: "News_banner";
                        readonly " $fragmentRefs": FragmentRefs<"NewsBanner_data">;
                    } | {
                        readonly __typename: "Tabs";
                        readonly " $fragmentRefs": FragmentRefs<"Tabs_data">;
                    } | {
                        readonly __typename: "Icon_tabs_section";
                        readonly " $fragmentRefs": FragmentRefs<"IconTabs_data">;
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
            ... on News_banner {
              ...NewsBanner_data
            }
            ... on Tabs {
              ...Tabs_data
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

fragment HomeBanner_data on Home_banner {
  banner_text
  banner_image
}

fragment IconTabs_data on Icon_tabs_section {
  section_title
  section_background_color
  icon_tabs {
    tab_icon
    tab_image
    tab_link {
      __typename
      _linkType
      ... on _ExternalLink {
        url
      }
    }
    tab_title
    tab_description
  }
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

fragment NewsBanner_data on News_banner {
  _linkType
  articles_list {
    article_image
    newspaper_icon
    article_title
    article_url {
      __typename
      _linkType
      ... on _ExternalLink {
        url
      }
    }
  }
}

fragment Presentation_data on Presentation {
  content
}

fragment Tabs_data on Tabs {
  background_color
  tabs_name_color
  tabs_name_selected_color
  tabs_content_color
  tabs_list {
    name
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "WhereLanding"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "section_title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_linkType",
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  (v5/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      }
    ],
    "type": "_ExternalLink"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SiteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LandingConnectionConnection",
        "kind": "LinkedField",
        "name": "allLandings",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LandingConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Landing",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LandingSections",
                    "kind": "LinkedField",
                    "name": "sections",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "section",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "HomeBanner_data"
                              }
                            ],
                            "type": "Home_banner"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "ImpactBanner_data"
                              }
                            ],
                            "type": "Icon_list"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Presentation_data"
                              }
                            ],
                            "type": "Presentation"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "NewsBanner_data"
                              }
                            ],
                            "type": "News_banner"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Tabs_data"
                              }
                            ],
                            "type": "Tabs"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "IconTabs_data"
                              }
                            ],
                            "type": "Icon_tabs_section"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SiteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LandingConnectionConnection",
        "kind": "LinkedField",
        "name": "allLandings",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LandingConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Landing",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LandingSections",
                    "kind": "LinkedField",
                    "name": "sections",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "section",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "banner_text",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "banner_image",
                                "storageKey": null
                              }
                            ],
                            "type": "Home_banner"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Icon_listIcon_list_elements",
                                "kind": "LinkedField",
                                "name": "icon_list_elements",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "subtitle",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "icon",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "background_image",
                                "storageKey": null
                              }
                            ],
                            "type": "Icon_list"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v4/*: any*/)
                            ],
                            "type": "Presentation"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "News_bannerArticles_list",
                                "kind": "LinkedField",
                                "name": "articles_list",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "article_image",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "newspaper_icon",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "article_title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "article_url",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "News_banner"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "background_color",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tabs_name_color",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tabs_name_selected_color",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tabs_content_color",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TabsTabs_list",
                                "kind": "LinkedField",
                                "name": "tabs_list",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                  },
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Tabs"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "section_background_color",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Icon_tabs_sectionIcon_tabs",
                                "kind": "LinkedField",
                                "name": "icon_tabs",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tab_icon",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tab_image",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "tab_link",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tab_title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tab_description",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Icon_tabs_section"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SiteQuery",
    "operationKind": "query",
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Icon_list {\n              ...ImpactBanner_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n            ... on News_banner {\n              ...NewsBanner_data\n            }\n            ... on Tabs {\n              ...Tabs_data\n            }\n            ... on Icon_tabs_section {\n              ...IconTabs_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment IconTabs_data on Icon_tabs_section {\n  section_title\n  section_background_color\n  icon_tabs {\n    tab_icon\n    tab_image\n    tab_link {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n    tab_title\n    tab_description\n  }\n}\n\nfragment ImpactBanner_data on Icon_list {\n  section_title\n  icon_list_elements {\n    ...ImpactItem_data\n  }\n  background_image\n}\n\nfragment ImpactItem_data on Icon_listIcon_list_elements {\n  title\n  subtitle\n  icon\n}\n\nfragment NewsBanner_data on News_banner {\n  _linkType\n  articles_list {\n    article_image\n    newspaper_icon\n    article_title\n    article_url {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n}\n\nfragment Presentation_data on Presentation {\n  content\n}\n\nfragment Tabs_data on Tabs {\n  background_color\n  tabs_name_color\n  tabs_name_selected_color\n  tabs_content_color\n  tabs_list {\n    name\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '37ee56f9642ba7a7d280ff4acf0e4fe8';
export default node;
