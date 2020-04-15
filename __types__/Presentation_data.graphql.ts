/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Presentation_data = {
    readonly content: unknown | null;
    readonly " $refType": "Presentation_data";
};
export type Presentation_data$data = Presentation_data;
export type Presentation_data$key = {
    readonly " $data"?: Presentation_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Presentation_data",
  "type": "Presentation",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '876884c339cabd156f23e89ed01e4fed';
export default node;
