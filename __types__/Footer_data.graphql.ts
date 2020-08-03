/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Footer_data = {
    readonly social_networks: ReadonlyArray<{
        readonly image: unknown | null;
        readonly link: {
            readonly url?: string;
        } | null;
    }> | null;
    readonly action_buttons: ReadonlyArray<{
        readonly text: string | null;
        readonly link: {
            readonly _meta?: {
                readonly id: string;
            };
        } | null;
    }> | null;
    readonly navigation_links: ReadonlyArray<{
        readonly text: string | null;
        readonly link: {
            readonly _meta?: {
                readonly id: string;
            };
        } | null;
    }> | null;
    readonly " $refType": "Footer_data";
};
export type Footer_data$data = Footer_data;
export type Footer_data$key = {
    readonly " $data"?: Footer_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Footer_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "link",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Meta",
        "kind": "LinkedField",
        "name": "_meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Footer_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FooterSocial_networks",
      "kind": "LinkedField",
      "name": "social_networks",
      "plural": true,
      "selections": [
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
          "concreteType": null,
          "kind": "LinkedField",
          "name": "link",
          "plural": false,
          "selections": [
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FooterAction_buttons",
      "kind": "LinkedField",
      "name": "action_buttons",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FooterNavigation_links",
      "kind": "LinkedField",
      "name": "navigation_links",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Footer"
};
})();
(node as any).hash = '3d1a2ea52418ca3a59174776503fe5dc';
export default node;
