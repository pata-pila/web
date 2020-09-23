/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Item_data = {
    readonly title: string | null;
    readonly subtitle: string | null;
    readonly icon: unknown | null;
    readonly " $refType": "Item_data";
};
export type Item_data$data = Item_data;
export type Item_data$key = {
    readonly " $data"?: Item_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Item_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Item_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "icon",
      "storageKey": null
    }
  ],
  "type": "Icon_listElements"
};
(node as any).hash = '856e68b5ac5015608dfc201ec0d389b8';
export default node;
