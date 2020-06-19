/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Organizations_data = {
    readonly section_name: string | null;
    readonly organizations: ReadonlyArray<{
        readonly organization: ({
            readonly __typename: "Organization";
            readonly " $fragmentRefs": FragmentRefs<"Organization_data">;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null;
    }> | null;
    readonly " $refType": "Organizations_data";
};
export type Organizations_data$data = Organizations_data;
export type Organizations_data$key = {
    readonly " $data"?: Organizations_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Organizations_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Organizations_data",
  "type": "Organizations",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "section_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organizations",
      "storageKey": null,
      "args": null,
      "concreteType": "OrganizationsOrganizations",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "organization",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "__typename",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "type": "Organization",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Organization_data",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '6cd4291b0b10f1bb585258e185fac13d';
export default node;
