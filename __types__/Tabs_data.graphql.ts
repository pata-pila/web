/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Tabs_data = {
    readonly background_color: string | null;
    readonly tabs_name_color: string | null;
    readonly tabs_name_selected_color: string | null;
    readonly tabs_content_color: string | null;
    readonly tabs_list: ReadonlyArray<{
        readonly name: string | null;
        readonly content: unknown | null;
    }> | null;
    readonly " $refType": "Tabs_data";
};
export type Tabs_data$data = Tabs_data;
export type Tabs_data$key = {
    readonly " $data"?: Tabs_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Tabs_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Tabs_data",
  "type": "Tabs",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "background_color",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tabs_name_color",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tabs_name_selected_color",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tabs_content_color",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "tabs_list",
      "storageKey": null,
      "args": null,
      "concreteType": "TabsTabs_list",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "content",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'd04567d4eda607bc5289042b319035c2';
export default node;
