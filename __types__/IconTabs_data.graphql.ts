/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IconTabs_data = {
    readonly section_title: unknown | null;
    readonly section_background_color: string | null;
    readonly icon_tabs: ReadonlyArray<{
        readonly tab_icon: unknown | null;
        readonly tab_image: unknown | null;
        readonly tab_link: {
            readonly _linkType: string | null;
            readonly url?: string;
        } | null;
        readonly tab_title: unknown | null;
        readonly tab_description: unknown | null;
    }> | null;
    readonly " $refType": "IconTabs_data";
};
export type IconTabs_data$data = IconTabs_data;
export type IconTabs_data$key = {
    readonly " $data"?: IconTabs_data$data;
    readonly " $fragmentRefs": FragmentRefs<"IconTabs_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "IconTabs_data",
  "type": "Icon_tabs_section",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "section_title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "section_background_color",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "icon_tabs",
      "storageKey": null,
      "args": null,
      "concreteType": "Icon_tabs_sectionIcon_tabs",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "tab_icon",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "tab_image",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "tab_link",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "_linkType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "type": "_ExternalLink",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "tab_title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "tab_description",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'f1184a17449e9d3b0ffd3084cee33368';
export default node;
