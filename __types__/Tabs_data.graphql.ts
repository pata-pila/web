/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Tabs_data = {
    readonly background_color: string | null;
    readonly tabs_name_color: string | null;
    readonly tabs_name_selected_color: string | null;
    readonly tabs_list: ReadonlyArray<{
        readonly name: string | null;
        readonly content: unknown | null;
        readonly content_color: string | null;
        readonly content_background_color: string | null;
    }> | null;
    readonly " $refType": "Tabs_data";
};
export type Tabs_data$data = Tabs_data;
export type Tabs_data$key = {
    readonly " $data"?: Tabs_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Tabs_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Tabs_data",
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
      "name": "tabs_name_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tabs_name_selected_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TabsTabs_list",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content_background_color",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Tabs"
};
(node as any).hash = '59afc414894338fb09083a8e96e37bb7';
export default node;
