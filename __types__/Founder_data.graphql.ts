/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Founder_data = {
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
  "kind": "Fragment",
  "name": "Founder_data",
  "type": "Founder",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "founder_information",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "founder_picture",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '82910276b851675099c4bd96de1e66da';
export default node;
