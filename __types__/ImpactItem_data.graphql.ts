/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactItem_data = {
    readonly title: string | null;
    readonly subtitle: string | null;
    readonly icon: unknown | null;
    readonly " $refType": "ImpactItem_data";
};
export type ImpactItem_data$data = ImpactItem_data;
export type ImpactItem_data$key = {
    readonly " $data"?: ImpactItem_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactItem_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImpactItem_data",
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
(node as any).hash = '1ae124dfbcc2a101eb627aeac5c422e6';
export default node;
