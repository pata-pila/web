/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MalnutritionSection_data = {
    readonly malnutrition_title: string | null;
    readonly malnutrition_image_1: unknown | null;
    readonly malnutrition_external_menu: {
        readonly _linkType: string | null;
        readonly malnutrition_menu?: ReadonlyArray<{
            readonly malnutrition_menu_item: unknown | null;
            readonly malnutrition_menu_item_text: unknown | null;
            readonly malnutrition_menu_item_description: unknown | null;
        }> | null;
    } | null;
    readonly " $refType": "MalnutritionSection_data";
};
export type MalnutritionSection_data$data = MalnutritionSection_data;
export type MalnutritionSection_data$key = {
    readonly " $data"?: MalnutritionSection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"MalnutritionSection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MalnutritionSection_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "malnutrition_title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "malnutrition_image_1",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "malnutrition_external_menu",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "_linkType",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Malnutrition_menuMalnutrition_menu",
              "kind": "LinkedField",
              "name": "malnutrition_menu",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "malnutrition_menu_item",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "malnutrition_menu_item_text",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "malnutrition_menu_item_description",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Malnutrition_menu"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Malnutrition_section"
};
(node as any).hash = 'ecfa68f2392ad82f5e6329db6ef3beb2';
export default node;
