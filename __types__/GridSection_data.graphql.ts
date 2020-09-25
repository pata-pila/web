/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GridSection_data = {
    readonly section_title: unknown | null;
    readonly section_title_color: string | null;
    readonly grid_section_title: unknown | null;
    readonly grid_section_subtitle: unknown | null;
    readonly grid_items: ReadonlyArray<{
        readonly grid_item_image: unknown | null;
    }> | null;
    readonly " $refType": "GridSection_data";
};
export type GridSection_data$data = GridSection_data;
export type GridSection_data$key = {
    readonly " $data"?: GridSection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"GridSection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GridSection_data",
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
      "name": "section_title_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "grid_section_title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "grid_section_subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Grid_sectionGrid_items",
      "kind": "LinkedField",
      "name": "grid_items",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "grid_item_image",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Grid_section"
};
(node as any).hash = 'acfe5b0733859cbff5283cf03bc5a8a3';
export default node;
