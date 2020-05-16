/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactBanner_data = {
    readonly section_title: unknown | null;
    readonly icon_list_elements: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"ImpactItem_data">;
    }> | null;
    readonly background_image: unknown | null;
    readonly " $refType": "ImpactBanner_data";
};
export type ImpactBanner_data$data = ImpactBanner_data;
export type ImpactBanner_data$key = {
    readonly " $data"?: ImpactBanner_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactBanner_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ImpactBanner_data",
  "type": "Icon_list",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "section_title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "icon_list_elements",
      "storageKey": null,
      "args": null,
      "concreteType": "Icon_listIcon_list_elements",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ImpactItem_data",
          "args": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "background_image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'd051855387d7dc62d0e6ff5a787b7b99';
export default node;
