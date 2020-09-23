/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IconList_data = {
    readonly list_name: string | null;
    readonly elements: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Item_data">;
    }> | null;
    readonly " $refType": "IconList_data";
};
export type IconList_data$data = IconList_data;
export type IconList_data$key = {
    readonly " $data"?: IconList_data$data;
    readonly " $fragmentRefs": FragmentRefs<"IconList_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IconList_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "list_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Icon_listElements",
      "kind": "LinkedField",
      "name": "elements",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Item_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Icon_list"
};
(node as any).hash = '16bb4e9acc1605d92f1f887a77ccbd77';
export default node;
