/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Organization_data = {
    readonly organization_name: string | null;
    readonly members: ReadonlyArray<{
        readonly name: string | null;
        readonly position: string | null;
    }> | null;
    readonly " $refType": "Organization_data";
};
export type Organization_data$data = Organization_data;
export type Organization_data$key = {
    readonly " $data"?: Organization_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Organization_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Organization_data",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
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
};
(node as any).hash = '809b37efe6de7dcc71f0b0683b18d3ca';
export default node;
