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
  "kind": "Fragment",
  "name": "Organization_data",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organization_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "members",
      "storageKey": null,
      "args": null,
      "concreteType": "OrganizationMembers",
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
          "name": "position",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '809b37efe6de7dcc71f0b0683b18d3ca';
export default node;
