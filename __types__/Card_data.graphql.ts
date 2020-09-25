/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Card_data = {
    readonly title: unknown | null;
    readonly theme: string | null;
    readonly image: unknown | null;
    readonly avatar: unknown | null;
    readonly content: unknown | null;
    readonly " $refType": "Card_data";
};
export type Card_data$data = Card_data;
export type Card_data$key = {
    readonly " $data"?: Card_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Card_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Card_data",
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
      "name": "theme",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Card"
};
(node as any).hash = 'c87e40345fba63486d001a7af82f40bf';
export default node;
