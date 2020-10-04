/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Story_data = {
    readonly section_title: unknown | null;
    readonly title: unknown | null;
    readonly date: unknown | null;
    readonly article: unknown | null;
    readonly " $refType": "Story_data";
};
export type Story_data$data = Story_data;
export type Story_data$key = {
    readonly " $data"?: Story_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Story_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Story_data",
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
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "article",
      "storageKey": null
    }
  ],
  "type": "Story_section"
};
(node as any).hash = 'c5a198ecc3f23bf55b492dff32b2c3d7';
export default node;
