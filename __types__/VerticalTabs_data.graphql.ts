/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerticalTabs_data = {
    readonly section_name: string | null;
    readonly section_header: unknown | null;
    readonly tabs_list: ReadonlyArray<{
        readonly name: string | null;
        readonly content: unknown | null;
    }> | null;
    readonly " $refType": "VerticalTabs_data";
};
export type VerticalTabs_data$data = VerticalTabs_data;
export type VerticalTabs_data$key = {
    readonly " $data"?: VerticalTabs_data$data;
    readonly " $fragmentRefs": FragmentRefs<"VerticalTabs_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VerticalTabs_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "section_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "section_header",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Vertical_tabsTabs_list",
      "kind": "LinkedField",
      "name": "tabs_list",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
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
      "storageKey": null
    }
  ],
  "type": "Vertical_tabs"
};
(node as any).hash = '8cb35a0a8972d1876c277719c84e424e';
export default node;
