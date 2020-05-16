/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactItem_data = {
    readonly title: unknown | null;
    readonly subtitle: unknown | null;
    readonly icon: unknown | null;
    readonly " $refType": "ImpactItem_data";
};
export type ImpactItem_data$data = ImpactItem_data;
export type ImpactItem_data$key = {
    readonly " $data"?: ImpactItem_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactItem_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ImpactItem_data",
  "type": "Icon_listIcon_list_elements",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "subtitle",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "icon",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '0fd32a7c7280998119e46bf7e496812e';
export default node;
