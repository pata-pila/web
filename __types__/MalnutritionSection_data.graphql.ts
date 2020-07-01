/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MalnutritionSection_data = {
    readonly malnutrition_title: unknown | null;
    readonly " $refType": "MalnutritionSection_data";
};
export type MalnutritionSection_data$data = MalnutritionSection_data;
export type MalnutritionSection_data$key = {
    readonly " $data"?: MalnutritionSection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"MalnutritionSection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MalnutritionSection_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "malnutrition_title",
      "storageKey": null
    }
  ],
  "type": "Malnutrition_section"
};
(node as any).hash = '3d3cbc0cda1092e70693c0dcc43909c7';
export default node;
