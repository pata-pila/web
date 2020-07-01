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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeBanner_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "banner_text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "banner_image",
      "storageKey": null
    }
  ],
  "type": "Home_banner"
};
(node as any).hash = '0befb1276fdf360fb48125a923d06937';
export default node;
