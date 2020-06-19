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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImpactBanner_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "section_title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Icon_listIcon_list_elements",
      "kind": "LinkedField",
      "name": "icon_list_elements",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImpactItem_data"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "background_image",
      "storageKey": null
    }
  ],
  "type": "Icon_list"
};
(node as any).hash = 'd051855387d7dc62d0e6ff5a787b7b99';
export default node;
