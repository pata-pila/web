/* tslint:disable */
/* eslint-disable */
/* @relayHash 207a466a43954e670ff0e32fbc191f58 */

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
                        readonly __typename: "Founder";
                        readonly " $fragmentRefs": FragmentRefs<"Founder_data">;
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
            ... on Founder {
              ...Founder_data
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

fragment Founder_data on Founder {
  section_name
  founder_information
  founder_picture
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
  title
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "section_title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_linkType",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  (v5/*: any*/),
  {
    "kind": "InlineFragment",
    "type": "_ExternalLink",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
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
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "News_banner",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "NewsBanner_data",
                                "args": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Founder",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "Founder_data",
                                "args": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Tabs",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "Tabs_data",
                                "args": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Icon_tabs_section",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "IconTabs_data",
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
                              (v3/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "icon_list_elements",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Icon_listIcon_list_elements",
                                "plural": true,
                                "selections": [
                                  (v4/*: any*/),
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
                              (v4/*: any*/)
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "News_banner",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "articles_list",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "News_bannerArticles_list",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "article_image",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "newspaper_icon",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "article_title",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "article_url",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": false,
                                    "selections": (v6/*: any*/)
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Founder",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "section_name",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "founder_information",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "founder_picture",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Tabs",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "background_color",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "tabs_name_color",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "tabs_name_selected_color",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "tabs_content_color",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "tabs_list",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TabsTabs_list",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "name",
                                    "args": null,
                                    "storageKey": null
                                  },
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
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Icon_tabs_section",
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "section_background_color",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "icon_tabs",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Icon_tabs_sectionIcon_tabs",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "tab_icon",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "tab_image",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "tab_link",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": false,
                                    "selections": (v6/*: any*/)
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "tab_title",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "tab_description",
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SiteQuery",
    "id": null,
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Icon_list {\n              ...ImpactBanner_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n            ... on News_banner {\n              ...NewsBanner_data\n            }\n            ... on Founder {\n              ...Founder_data\n            }\n            ... on Tabs {\n              ...Tabs_data\n            }\n            ... on Icon_tabs_section {\n              ...IconTabs_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Founder_data on Founder {\n  section_name\n  founder_information\n  founder_picture\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment IconTabs_data on Icon_tabs_section {\n  section_title\n  section_background_color\n  icon_tabs {\n    tab_icon\n    tab_image\n    tab_link {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n    tab_title\n    tab_description\n  }\n}\n\nfragment ImpactBanner_data on Icon_list {\n  section_title\n  icon_list_elements {\n    ...ImpactItem_data\n  }\n  background_image\n}\n\nfragment ImpactItem_data on Icon_listIcon_list_elements {\n  title\n  subtitle\n  icon\n}\n\nfragment NewsBanner_data on News_banner {\n  _linkType\n  articles_list {\n    article_image\n    newspaper_icon\n    article_title\n    article_url {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n}\n\nfragment Presentation_data on Presentation {\n  title\n}\n\nfragment Tabs_data on Tabs {\n  background_color\n  tabs_name_color\n  tabs_name_selected_color\n  tabs_content_color\n  tabs_list {\n    name\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e3b728bc941d24a8669d3d30b2fc9516';
export default node;
