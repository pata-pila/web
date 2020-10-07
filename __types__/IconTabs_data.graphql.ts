/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IconTabs_data = {
    readonly section_title: unknown | null;
    readonly section_background_color: string | null;
    readonly background_illustration: unknown | null;
    readonly title_enlarged: unknown | null;
    readonly icon_tabs: ReadonlyArray<{
        readonly tab_icon: unknown | null;
        readonly tab_content: unknown | null;
        readonly tab_link: {
            readonly _linkType: string | null;
            readonly url?: string;
        } | null;
        readonly tab_title: unknown | null;
    }> | null;
    readonly " $refType": "IconTabs_data";
};
export type IconTabs_data$data = IconTabs_data;
export type IconTabs_data$key = {
    readonly " $data"?: IconTabs_data$data;
    readonly " $fragmentRefs": FragmentRefs<"IconTabs_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IconTabs_data",
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
      "name": "section_background_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "background_illustration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title_enlarged",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Icon_tabs_sectionIcon_tabs",
      "kind": "LinkedField",
      "name": "icon_tabs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tab_icon",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tab_content",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "tab_link",
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
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                }
              ],
              "type": "_ExternalLink"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tab_title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Icon_tabs_section"
};
(node as any).hash = 'fe1232cfe5d45febe3130f0e9308ef35';
export default node;
