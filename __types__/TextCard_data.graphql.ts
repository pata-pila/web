/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TextCard_data = {
    readonly background_color: string | null;
    readonly text: unknown | null;
    readonly " $refType": "TextCard_data";
};
export type TextCard_data$data = TextCard_data;
export type TextCard_data$key = {
    readonly " $data"?: TextCard_data$data;
    readonly " $fragmentRefs": FragmentRefs<"TextCard_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TextCard_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "background_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Text_card"
};
(node as any).hash = '9ad739b6865c5b0e22099c6d089cb818';
export default node;
