/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Presentation_data = {
    readonly name: unknown | null;
    readonly " $refType": "Presentation_data";
};
export type Presentation_data$data = Presentation_data;
export type Presentation_data$key = {
    readonly " $data"?: Presentation_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Presentation_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Presentation"
};
(node as any).hash = '4f056b7d21c4d85f3fa10971eb17dcd9';
export default node;
