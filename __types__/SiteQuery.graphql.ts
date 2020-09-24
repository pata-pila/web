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
    readonly routes: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly route: string | null;
                readonly _meta: {
                    readonly id: string;
                };
            };
        } | null> | null;
    };
    readonly allLandings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly sections: ReadonlyArray<{
                    readonly section: ({
                        readonly __typename: "Home_banner";
                        readonly " $fragmentRefs": FragmentRefs<"HomeBanner_data">;
                    } | {
                        readonly __typename: "Impact_section";
                        readonly " $fragmentRefs": FragmentRefs<"ImpactSection_data">;
                    } | {
                        readonly __typename: "Presentation";
                        readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
                    } | {
                        readonly __typename: "Tabs";
                        readonly " $fragmentRefs": FragmentRefs<"Tabs_data">;
                    } | {
                        readonly __typename: "Vertical_tabs";
                        readonly " $fragmentRefs": FragmentRefs<"VerticalTabs_data">;
                    } | {
                        readonly __typename: "Icon_tabs_section";
                        readonly " $fragmentRefs": FragmentRefs<"IconTabs_data">;
                    } | {
                        readonly __typename: "Footer";
                        readonly " $fragmentRefs": FragmentRefs<"Footer_data">;
                    } | {
                        readonly __typename: "Header";
                        readonly " $fragmentRefs": FragmentRefs<"Header_data">;
                    } | {
                        readonly __typename: "Column_section";
                        readonly " $fragmentRefs": FragmentRefs<"ColumnSection_data">;
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
            ... on Impact_section {
              ...ImpactSection_data
            }
            ... on Presentation {
              ...Presentation_data
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
          }
        }
      }
    }
  }
}

fragment ColumnSection_data on Column_section {
  section_title
  section_background
  subsections_list {
    subsection {
      __typename
      ... on Subsection {
        ...Subsection_data
      }
    }
  }
}

fragment Footer_data on Footer {
  pata_pila_icon
  social_networks {
    image
    link {
      __typename
      ... on _ExternalLink {
        url
      }
    }
  }
  action_buttons {
    text
    link {
      __typename
      ... on _Document {
        _meta {
          id
        }
      }
    }
  }
  navigation_links {
    text
    link {
      __typename
      ... on _Document {
        _meta {
          id
        }
      }
    }
  }
}

fragment Header_data on Header {
  pata_pila_icon
  social_media {
    social_icon
    social_name
    social_link {
      __typename
      _linkType
      ... on _ExternalLink {
        url
      }
    }
  }
  header_links {
    link_title
    link_document {
      __typename
      ... on _Document {
        _meta {
          id
        }
      }
    }
  }
  action_buttons {
    background_color
    border_color
    text_color
    mobile_background_color
    mobile_border_color
    mobile_text_color
    action_title
    action {
      __typename
      ... on _Document {
        _meta {
          id
        }
      }
    }
  }
}

fragment HomeBanner_data on Home_banner {
  banner_text
  banner_image
}

fragment IconList_data on Icon_list {
  list_name
  elements {
    ...Item_data
  }
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

fragment ImpactSection_data on Impact_section {
  title
  icons {
    __typename
    ... on Icon_list {
      ...IconList_data
    }
  }
  background_image
}

fragment Item_data on Icon_listElements {
  title
  subtitle
  icon
}

fragment Presentation_data on Presentation {
  title
  theme
  slides {
    text_alignment
    content
  }
}

fragment Subsection_data on Subsection {
  __typename
  body {
    __typename
    ... on SubsectionBodyImage_section {
      primary {
        subsection_image
      }
    }
    ... on SubsectionBodyParagraph_section {
      primary {
        subsection_paragraph
      }
    }
  }
}

fragment Tabs_data on Tabs {
  background_color
  tabs_name_color
  tabs_name_selected_color
  tabs_list {
    name
    content
    content_color
    content_background_color
  }
}

fragment VerticalTabs_data on Vertical_tabs {
  section_name
  section_header
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
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "Meta",
  "kind": "LinkedField",
  "name": "_meta",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": "routes",
  "args": null,
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
              "kind": "ScalarField",
              "name": "route",
              "storageKey": null
            },
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background_color",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "section_title",
  "storageKey": null
},
v10 = {
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
},
v11 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "_linkType",
    "storageKey": null
  },
  (v10/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pata_pila_icon",
  "storageKey": null
},
v13 = [
  (v4/*: any*/),
  (v1/*: any*/)
],
v14 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "link",
    "plural": false,
    "selections": (v13/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SiteQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                          (v4/*: any*/),
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
                                "name": "ImpactSection_data"
                              }
                            ],
                            "type": "Impact_section"
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
                                "name": "VerticalTabs_data"
                              }
                            ],
                            "type": "Vertical_tabs"
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
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Footer_data"
                              }
                            ],
                            "type": "Footer"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Header_data"
                              }
                            ],
                            "type": "Header"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "ColumnSection_data"
                              }
                            ],
                            "type": "Column_section"
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
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                          (v4/*: any*/),
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
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "icons",
                                "plural": false,
                                "selections": [
                                  (v4/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "list_name",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Icon_listElements",
                                        "kind": "LinkedField",
                                        "name": "elements",
                                        "plural": true,
                                        "selections": [
                                          (v5/*: any*/),
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
                                      }
                                    ],
                                    "type": "Icon_list"
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
                            "type": "Impact_section"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "theme",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "PresentationSlides",
                                "kind": "LinkedField",
                                "name": "slides",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "text_alignment",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Presentation"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v7/*: any*/),
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
                                "concreteType": "TabsTabs_list",
                                "kind": "LinkedField",
                                "name": "tabs_list",
                                "plural": true,
                                "selections": [
                                  (v8/*: any*/),
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "content_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "content_background_color",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Tabs"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "section_name",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "section_header",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Vertical_tabsTabs_list",
                                "kind": "LinkedField",
                                "name": "tabs_list",
                                "plural": true,
                                "selections": [
                                  (v8/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Vertical_tabs"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v9/*: any*/),
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
                                    "selections": (v11/*: any*/),
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
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FooterSocial_networks",
                                "kind": "LinkedField",
                                "name": "social_networks",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "image",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "link",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v10/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FooterAction_buttons",
                                "kind": "LinkedField",
                                "name": "action_buttons",
                                "plural": true,
                                "selections": (v14/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FooterNavigation_links",
                                "kind": "LinkedField",
                                "name": "navigation_links",
                                "plural": true,
                                "selections": (v14/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "Footer"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "HeaderSocial_media",
                                "kind": "LinkedField",
                                "name": "social_media",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "social_icon",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "social_name",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "social_link",
                                    "plural": false,
                                    "selections": (v11/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "HeaderHeader_links",
                                "kind": "LinkedField",
                                "name": "header_links",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "link_title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "link_document",
                                    "plural": false,
                                    "selections": (v13/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "HeaderAction_buttons",
                                "kind": "LinkedField",
                                "name": "action_buttons",
                                "plural": true,
                                "selections": [
                                  (v7/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "border_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "text_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mobile_background_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mobile_border_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mobile_text_color",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "action_title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "action",
                                    "plural": false,
                                    "selections": (v13/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Header"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "section_background",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Column_sectionSubsections_list",
                                "kind": "LinkedField",
                                "name": "subsections_list",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "subsection",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": null,
                                            "kind": "LinkedField",
                                            "name": "body",
                                            "plural": true,
                                            "selections": [
                                              (v4/*: any*/),
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "SubsectionBodyImage_sectionPrimary",
                                                    "kind": "LinkedField",
                                                    "name": "primary",
                                                    "plural": false,
                                                    "selections": [
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "kind": "ScalarField",
                                                        "name": "subsection_image",
                                                        "storageKey": null
                                                      }
                                                    ],
                                                    "storageKey": null
                                                  }
                                                ],
                                                "type": "SubsectionBodyImage_section"
                                              },
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "SubsectionBodyParagraph_sectionPrimary",
                                                    "kind": "LinkedField",
                                                    "name": "primary",
                                                    "plural": false,
                                                    "selections": [
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "kind": "ScalarField",
                                                        "name": "subsection_paragraph",
                                                        "storageKey": null
                                                      }
                                                    ],
                                                    "storageKey": null
                                                  }
                                                ],
                                                "type": "SubsectionBodyParagraph_section"
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "type": "Subsection"
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Column_section"
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
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  routes: allLandings {\n    edges {\n      node {\n        route\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Impact_section {\n              ...ImpactSection_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n            ... on Tabs {\n              ...Tabs_data\n            }\n            ... on Vertical_tabs {\n              ...VerticalTabs_data\n            }\n            ... on Icon_tabs_section {\n              ...IconTabs_data\n            }\n            ... on Footer {\n              ...Footer_data\n            }\n            ... on Header {\n              ...Header_data\n            }\n            ... on Column_section {\n              ...ColumnSection_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ColumnSection_data on Column_section {\n  section_title\n  section_background\n  subsections_list {\n    subsection {\n      __typename\n      ... on Subsection {\n        ...Subsection_data\n      }\n    }\n  }\n}\n\nfragment Footer_data on Footer {\n  pata_pila_icon\n  social_networks {\n    image\n    link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n  action_buttons {\n    text\n    link {\n      __typename\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  navigation_links {\n    text\n    link {\n      __typename\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Header_data on Header {\n  pata_pila_icon\n  social_media {\n    social_icon\n    social_name\n    social_link {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n  header_links {\n    link_title\n    link_document {\n      __typename\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  action_buttons {\n    background_color\n    border_color\n    text_color\n    mobile_background_color\n    mobile_border_color\n    mobile_text_color\n    action_title\n    action {\n      __typename\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment IconList_data on Icon_list {\n  list_name\n  elements {\n    ...Item_data\n  }\n}\n\nfragment IconTabs_data on Icon_tabs_section {\n  section_title\n  section_background_color\n  icon_tabs {\n    tab_icon\n    tab_image\n    tab_link {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n    tab_title\n    tab_description\n  }\n}\n\nfragment ImpactSection_data on Impact_section {\n  title\n  icons {\n    __typename\n    ... on Icon_list {\n      ...IconList_data\n    }\n  }\n  background_image\n}\n\nfragment Item_data on Icon_listElements {\n  title\n  subtitle\n  icon\n}\n\nfragment Presentation_data on Presentation {\n  title\n  theme\n  slides {\n    text_alignment\n    content\n  }\n}\n\nfragment Subsection_data on Subsection {\n  __typename\n  body {\n    __typename\n    ... on SubsectionBodyImage_section {\n      primary {\n        subsection_image\n      }\n    }\n    ... on SubsectionBodyParagraph_section {\n      primary {\n        subsection_paragraph\n      }\n    }\n  }\n}\n\nfragment Tabs_data on Tabs {\n  background_color\n  tabs_name_color\n  tabs_name_selected_color\n  tabs_list {\n    name\n    content\n    content_color\n    content_background_color\n  }\n}\n\nfragment VerticalTabs_data on Vertical_tabs {\n  section_name\n  section_header\n  tabs_list {\n    name\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '1724a4344fd2fa9f9ef9df3dcd6c8091';
export default node;
