/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Founder_data = {
    readonly section_title: string | null;
    readonly __typename: "Founder";
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
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "section_title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'd7d772fb23fc2b33b06bc9585ce8de5e';
export default node;
