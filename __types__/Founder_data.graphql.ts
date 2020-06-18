/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Founder_data = {
    readonly section_name: string | null;
    readonly founder_information: unknown | null;
    readonly founder_picture: unknown | null;
    readonly " $refType": "Founder_data";
};
export type Founder_data$data = Founder_data;
export type Founder_data$key = {
    readonly " $data"?: Founder_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Founder_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Founder_data",
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
};
(node as any).hash = '969a95ce629e385d758499152ad08929';
export default node;
