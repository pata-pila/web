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
                        readonly __typename: "Story_section";
                        readonly " $fragmentRefs": FragmentRefs<"Story_data">;
                    } | {
                        readonly __typename: "Impact_section";
                        readonly " $fragmentRefs": FragmentRefs<"ImpactSection_data">;
                    } | {
                        readonly __typename: "Impact_statistics";
                        readonly " $fragmentRefs": FragmentRefs<"ImpactStatistics_data">;
                    } | {
                        readonly __typename: "Presentation";
                        readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
                    } | {
                        readonly __typename: "Organizations";
                        readonly " $fragmentRefs": FragmentRefs<"Organizations_data">;
                    } | {
                        readonly __typename: "News_banner";
                        readonly " $fragmentRefs": FragmentRefs<"NewsBanner_data">;
                    } | {
                        readonly __typename: "Card";
                        readonly " $fragmentRefs": FragmentRefs<"Card_data">;
                    } | {
                        readonly __typename: "Donations";
                        readonly " $fragmentRefs": FragmentRefs<"Donations_data">;
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
                        readonly __typename: "Grid_section";
                        readonly " $fragmentRefs": FragmentRefs<"GridSection_data">;
                    } | {
                        readonly __typename: "Text_card";
                        readonly " $fragmentRefs": FragmentRefs<"TextCard_data">;
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

fragment Card_data on Card {
  title
  theme
  image
  avatar
  content
}

fragment ColumnSection_data on Column_section {
  section_title
  section_background
  section_title_color
  body {
    __typename
    ... on Column_sectionBodyImage_section {
      primary {
        subsection_image
      }
    }
    ... on Column_sectionBodyParagraph_subsection {
      primary {
        subsection_paragraph
      }
    }
  }
}

fragment Donations_data on Donations {
  donation_link {
    __typename
    ... on _ExternalLink {
      url
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
  navigation_links {
    text
    link {
      __typename
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

fragment GridSection_data on Grid_section {
  section_title
  section_title_color
  grid_section_title
  grid_section_subtitle
  grid_items {
    grid_item_image
  }
}

fragment Header_data on Header {
  pata_pila_icon
  social_media {
    social_icon
    social_name
    social_link {
      __typename
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
  header_links {
    link_title
    link_document {
      __typename
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
  background_illustration
  title_enlarged
  icon_tabs {
    tab_icon
    tab_content
    tab_link {
      __typename
      ... on _ExternalLink {
        url
      }
      ... on _Document {
        _meta {
          id
        }
      }
    }
    tab_title
  }
}

fragment ImpactSection_data on Impact_section {
  title
  icons {
    __typename
    ...IconList_data
  }
  background_image
}

fragment ImpactStatistics_data on Impact_statistics {
  title
  icons {
    __typename
    ...IconList_data
  }
  background_color
}

fragment Item_data on Icon_listElements {
  title
  subtitle
  icon
}

fragment NewsBanner_data on News_banner {
  articles_list {
    article_image
    newspaper_icon
    article_title
    article_url {
      __typename
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

fragment Organization_data on Organization {
  organization_name
  members {
    name
    position
  }
}

fragment Organizations_data on Organizations {
  section_name
  organizations {
    organization {
      __typename
      ...Organization_data
    }
  }
}

fragment Presentation_data on Presentation {
  title
  theme
  slides {
    text_alignment
    content
  }
}

fragment Story_data on Story_section {
  section_title
  title
  date
  article
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

fragment TextCard_data on Text_card {
  background_color
  text
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
  "name": "section_title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
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
            (v6/*: any*/),
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background_color",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "theme",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "section_name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = {
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
v14 = [
  (v4/*: any*/),
  (v1/*: any*/),
  (v13/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v16 = [
  (v4/*: any*/),
  (v13/*: any*/)
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pata_pila_icon",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v19 = [
  (v18/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "link",
    "plural": false,
    "selections": (v14/*: any*/),
    "storageKey": null
  }
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "section_title_color",
  "storageKey": null
};
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
                                "name": "Story_data"
                              }
                            ],
                            "type": "Story_section"
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
                                "name": "ImpactStatistics_data"
                              }
                            ],
                            "type": "Impact_statistics"
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
                                "name": "Organizations_data"
                              }
                            ],
                            "type": "Organizations"
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
                                "name": "Card_data"
                              }
                            ],
                            "type": "Card"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Donations_data"
                              }
                            ],
                            "type": "Donations"
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
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "GridSection_data"
                              }
                            ],
                            "type": "Grid_section"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "TextCard_data"
                              }
                            ],
                            "type": "Text_card"
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
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "date",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "article",
                                "storageKey": null
                              }
                            ],
                            "type": "Story_section"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
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
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/)
                            ],
                            "type": "Impact_statistics"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/),
                              (v9/*: any*/),
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
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Presentation"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrganizationsOrganizations",
                                "kind": "LinkedField",
                                "name": "organizations",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "organization",
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
                                            "name": "organization_name",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "OrganizationMembers",
                                            "kind": "LinkedField",
                                            "name": "members",
                                            "plural": true,
                                            "selections": [
                                              (v12/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "position",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "type": "Organization"
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Organizations"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
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
                                    "selections": (v14/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/),
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatar",
                                "storageKey": null
                              },
                              (v10/*: any*/)
                            ],
                            "type": "Card"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "donation_link",
                                "plural": false,
                                "selections": (v16/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "Donations"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/),
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
                                  (v12/*: any*/),
                                  (v10/*: any*/),
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
                              (v11/*: any*/),
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
                                  (v12/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Vertical_tabs"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
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
                                "kind": "ScalarField",
                                "name": "background_illustration",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title_enlarged",
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
                                    "name": "tab_content",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "tab_link",
                                    "plural": false,
                                    "selections": (v14/*: any*/),
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tab_title",
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
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FooterSocial_networks",
                                "kind": "LinkedField",
                                "name": "social_networks",
                                "plural": true,
                                "selections": [
                                  (v15/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "link",
                                    "plural": false,
                                    "selections": (v16/*: any*/),
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
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FooterNavigation_links",
                                "kind": "LinkedField",
                                "name": "navigation_links",
                                "plural": true,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "Footer"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v17/*: any*/),
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
                                    "selections": (v14/*: any*/),
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
                                    "selections": (v14/*: any*/),
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
                                  (v8/*: any*/),
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
                                    "selections": (v14/*: any*/),
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
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "section_background",
                                "storageKey": null
                              },
                              (v20/*: any*/),
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
                                        "concreteType": "Column_sectionBodyImage_sectionPrimary",
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
                                    "type": "Column_sectionBodyImage_section"
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Column_sectionBodyParagraph_subsectionPrimary",
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
                                    "type": "Column_sectionBodyParagraph_subsection"
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Column_section"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
                              (v20/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "grid_section_title",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "grid_section_subtitle",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Grid_sectionGrid_items",
                                "kind": "LinkedField",
                                "name": "grid_items",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "grid_item_image",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Grid_section"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/),
                              (v18/*: any*/)
                            ],
                            "type": "Text_card"
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
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  routes: allLandings {\n    edges {\n      node {\n        route\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Story_section {\n              ...Story_data\n            }\n            ... on Impact_section {\n              ...ImpactSection_data\n            }\n            ... on Impact_statistics {\n              ...ImpactStatistics_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n            ... on Organizations {\n              ...Organizations_data\n            }\n            ... on News_banner {\n              ...NewsBanner_data\n            }\n            ... on Card {\n              ...Card_data\n            }\n            ... on Donations {\n              ...Donations_data\n            }\n            ... on Tabs {\n              ...Tabs_data\n            }\n            ... on Vertical_tabs {\n              ...VerticalTabs_data\n            }\n            ... on Icon_tabs_section {\n              ...IconTabs_data\n            }\n            ... on Footer {\n              ...Footer_data\n            }\n            ... on Header {\n              ...Header_data\n            }\n            ... on Column_section {\n              ...ColumnSection_data\n            }\n            ... on Grid_section {\n              ...GridSection_data\n            }\n            ... on Text_card {\n              ...TextCard_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Card_data on Card {\n  title\n  theme\n  image\n  avatar\n  content\n}\n\nfragment ColumnSection_data on Column_section {\n  section_title\n  section_background\n  section_title_color\n  body {\n    __typename\n    ... on Column_sectionBodyImage_section {\n      primary {\n        subsection_image\n      }\n    }\n    ... on Column_sectionBodyParagraph_subsection {\n      primary {\n        subsection_paragraph\n      }\n    }\n  }\n}\n\nfragment Donations_data on Donations {\n  donation_link {\n    __typename\n    ... on _ExternalLink {\n      url\n    }\n  }\n}\n\nfragment Footer_data on Footer {\n  pata_pila_icon\n  social_networks {\n    image\n    link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n  action_buttons {\n    text\n    link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  navigation_links {\n    text\n    link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment GridSection_data on Grid_section {\n  section_title\n  section_title_color\n  grid_section_title\n  grid_section_subtitle\n  grid_items {\n    grid_item_image\n  }\n}\n\nfragment Header_data on Header {\n  pata_pila_icon\n  social_media {\n    social_icon\n    social_name\n    social_link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  header_links {\n    link_title\n    link_document {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n  action_buttons {\n    background_color\n    border_color\n    text_color\n    mobile_background_color\n    mobile_border_color\n    mobile_text_color\n    action_title\n    action {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment IconList_data on Icon_list {\n  list_name\n  elements {\n    ...Item_data\n  }\n}\n\nfragment IconTabs_data on Icon_tabs_section {\n  section_title\n  section_background_color\n  background_illustration\n  title_enlarged\n  icon_tabs {\n    tab_icon\n    tab_content\n    tab_link {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n    tab_title\n  }\n}\n\nfragment ImpactSection_data on Impact_section {\n  title\n  icons {\n    __typename\n    ...IconList_data\n  }\n  background_image\n}\n\nfragment ImpactStatistics_data on Impact_statistics {\n  title\n  icons {\n    __typename\n    ...IconList_data\n  }\n  background_color\n}\n\nfragment Item_data on Icon_listElements {\n  title\n  subtitle\n  icon\n}\n\nfragment NewsBanner_data on News_banner {\n  articles_list {\n    article_image\n    newspaper_icon\n    article_title\n    article_url {\n      __typename\n      ... on _ExternalLink {\n        url\n      }\n      ... on _Document {\n        _meta {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Organization_data on Organization {\n  organization_name\n  members {\n    name\n    position\n  }\n}\n\nfragment Organizations_data on Organizations {\n  section_name\n  organizations {\n    organization {\n      __typename\n      ...Organization_data\n    }\n  }\n}\n\nfragment Presentation_data on Presentation {\n  title\n  theme\n  slides {\n    text_alignment\n    content\n  }\n}\n\nfragment Story_data on Story_section {\n  section_title\n  title\n  date\n  article\n}\n\nfragment Tabs_data on Tabs {\n  background_color\n  tabs_name_color\n  tabs_name_selected_color\n  tabs_list {\n    name\n    content\n    content_color\n    content_background_color\n  }\n}\n\nfragment TextCard_data on Text_card {\n  background_color\n  text\n}\n\nfragment VerticalTabs_data on Vertical_tabs {\n  section_name\n  section_header\n  tabs_list {\n    name\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '004d5b0d941a1cca111c08168adaa332';
export default node;
