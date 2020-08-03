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
                        readonly __typename: "Organizations";
                        readonly " $fragmentRefs": FragmentRefs<"Organizations_data">;
                    } | {
                        readonly __typename: "News_banner";
                        readonly " $fragmentRefs": FragmentRefs<"NewsBanner_data">;
                    } | {
                        readonly __typename: "Founder";
                        readonly " $fragmentRefs": FragmentRefs<"Founder_data">;
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
            ... on Organizations {
              ...Organizations_data
            }
            ... on News_banner {
              ...NewsBanner_data
            }
            ... on Founder {
              ...Founder_data
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
          }
        }
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
      ... on Organization {
        ...Organization_data
      }
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
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "section_name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_linkType",
  "storageKey": null
},
v9 = {
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
v10 = [
  (v2/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/)
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
                                "name": "Founder_data"
                              }
                            ],
                            "type": "Founder"
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
                                  (v4/*: any*/),
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
                              (v4/*: any*/),
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
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Presentation"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/),
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
                                      (v2/*: any*/),
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
                                              (v7/*: any*/),
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
                              (v8/*: any*/),
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
                                    "selections": (v10/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "founder_information",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "founder_picture",
                                "storageKey": null
                              }
                            ],
                            "type": "Founder"
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
                                "selections": [
                                  (v2/*: any*/),
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Donations"
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
                                "concreteType": "TabsTabs_list",
                                "kind": "LinkedField",
                                "name": "tabs_list",
                                "plural": true,
                                "selections": [
                                  (v7/*: any*/),
                                  (v5/*: any*/),
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
                              (v6/*: any*/),
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
                                  (v7/*: any*/),
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Vertical_tabs"
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
                                    "selections": (v10/*: any*/),
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
    "text": "query SiteQuery(\n  $where: WhereLanding\n) {\n  allLandings(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Home_banner {\n              ...HomeBanner_data\n            }\n            ... on Icon_list {\n              ...ImpactBanner_data\n            }\n            ... on Presentation {\n              ...Presentation_data\n            }\n            ... on Organizations {\n              ...Organizations_data\n            }\n            ... on News_banner {\n              ...NewsBanner_data\n            }\n            ... on Founder {\n              ...Founder_data\n            }\n            ... on Donations {\n              ...Donations_data\n            }\n            ... on Tabs {\n              ...Tabs_data\n            }\n            ... on Vertical_tabs {\n              ...VerticalTabs_data\n            }\n            ... on Icon_tabs_section {\n              ...IconTabs_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Donations_data on Donations {\n  donation_link {\n    __typename\n    ... on _ExternalLink {\n      url\n    }\n  }\n}\n\nfragment Founder_data on Founder {\n  section_name\n  founder_information\n  founder_picture\n}\n\nfragment HomeBanner_data on Home_banner {\n  banner_text\n  banner_image\n}\n\nfragment IconTabs_data on Icon_tabs_section {\n  section_title\n  section_background_color\n  icon_tabs {\n    tab_icon\n    tab_image\n    tab_link {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n    tab_title\n    tab_description\n  }\n}\n\nfragment ImpactBanner_data on Icon_list {\n  section_title\n  icon_list_elements {\n    ...ImpactItem_data\n  }\n  background_image\n}\n\nfragment ImpactItem_data on Icon_listIcon_list_elements {\n  title\n  subtitle\n  icon\n}\n\nfragment NewsBanner_data on News_banner {\n  _linkType\n  articles_list {\n    article_image\n    newspaper_icon\n    article_title\n    article_url {\n      __typename\n      _linkType\n      ... on _ExternalLink {\n        url\n      }\n    }\n  }\n}\n\nfragment Organization_data on Organization {\n  organization_name\n  members {\n    name\n    position\n  }\n}\n\nfragment Organizations_data on Organizations {\n  section_name\n  organizations {\n    organization {\n      __typename\n      ... on Organization {\n        ...Organization_data\n      }\n    }\n  }\n}\n\nfragment Presentation_data on Presentation {\n  title\n  theme\n  slides {\n    text_alignment\n    content\n  }\n}\n\nfragment Tabs_data on Tabs {\n  background_color\n  tabs_name_color\n  tabs_name_selected_color\n  tabs_list {\n    name\n    content\n    content_color\n    content_background_color\n  }\n}\n\nfragment VerticalTabs_data on Vertical_tabs {\n  section_name\n  section_header\n  tabs_list {\n    name\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a935b16fe809ee060d36c73731cb0bad';
export default node;
