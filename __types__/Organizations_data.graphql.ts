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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Organizations_data",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Organization_data"
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
};
(node as any).hash = '6cd4291b0b10f1bb585258e185fac13d';
export default node;
