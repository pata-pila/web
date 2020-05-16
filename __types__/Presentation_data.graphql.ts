/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Presentation_data = {
    readonly title: unknown | null;
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
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '696a5b2f613f3867ea36c07b50d89ccb';
export default node;
