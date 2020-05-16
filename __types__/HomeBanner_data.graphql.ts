/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeBanner_data = {
    readonly banner_text: unknown | null;
    readonly banner_image: unknown | null;
    readonly " $refType": "HomeBanner_data";
};
export type HomeBanner_data$data = HomeBanner_data;
export type HomeBanner_data$key = {
    readonly " $data"?: HomeBanner_data$data;
    readonly " $fragmentRefs": FragmentRefs<"HomeBanner_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HomeBanner_data",
  "type": "Home_banner",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "banner_text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "banner_image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '0befb1276fdf360fb48125a923d06937';
export default node;
