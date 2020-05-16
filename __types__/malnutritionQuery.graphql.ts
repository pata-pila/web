/* tslint:disable */
/* eslint-disable */
/* @relayHash 1a7dfab30f6988742e3dc54b346b6848 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WhereMalnutrition = {
    title?: string | null;
    route?: string | null;
};
export type malnutritionQueryVariables = {
    where?: WhereMalnutrition | null;
};
export type malnutritionQueryResponse = {
    readonly allMalnutritions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly sections: ReadonlyArray<{
                    readonly section: ({
                        readonly __typename: "Malnutrition_section";
                        readonly " $fragmentRefs": FragmentRefs<"MalnutritionSection_data">;
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
export type malnutritionQuery = {
    readonly response: malnutritionQueryResponse;
    readonly variables: malnutritionQueryVariables;
};



/*
query malnutritionQuery(
  $where: WhereMalnutrition
) {
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

fragment MalnutritionSection_data on Malnutrition_section {
  malnutrition_title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "WhereMalnutrition",
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
    "name": "malnutritionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMalnutritions",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "MalnutritionConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MalnutritionConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Malnutrition",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sections",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MalnutritionSections",
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
                            "type": "Malnutrition_section",
                            "selections": [
                              {
                                "kind": "FragmentSpread",
                                "name": "MalnutritionSection_data",
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
    "name": "malnutritionQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMalnutritions",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "MalnutritionConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MalnutritionConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Malnutrition",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sections",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MalnutritionSections",
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
                            "type": "Malnutrition_section",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "malnutrition_title",
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
    "name": "malnutritionQuery",
    "id": null,
    "text": "query malnutritionQuery(\n  $where: WhereMalnutrition\n) {\n  allMalnutritions(where: $where) {\n    edges {\n      node {\n        sections {\n          section {\n            __typename\n            ... on Malnutrition_section {\n              ...MalnutritionSection_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MalnutritionSection_data on Malnutrition_section {\n  malnutrition_title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2b2ca02f6166969d67d33dec585f22cb';
export default node;
