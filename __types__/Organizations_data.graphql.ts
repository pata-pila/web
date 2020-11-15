/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Organizations_data = {
    readonly section_name: string | null;
    readonly organizations: ReadonlyArray<{
        readonly organization: {
            readonly " $fragmentRefs": FragmentRefs<"Organization_data">;
        } | null;
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "Organization_data"
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
(node as any).hash = 'f12acf0a061a9d87b048aad57c149139';
export default node;
