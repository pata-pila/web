/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Header_data = {
    readonly pata_pila_icon: unknown | null;
    readonly social_media: ReadonlyArray<{
        readonly social_icon: unknown | null;
        readonly social_name: unknown | null;
        readonly social_link: {
            readonly _linkType: string | null;
            readonly url?: string;
        } | null;
    }> | null;
    readonly header_links: ReadonlyArray<{
        readonly link_title: unknown | null;
        readonly link_url: {
            readonly _linkType: string | null;
            readonly url?: string;
        } | null;
    }> | null;
    readonly action_buttons: ReadonlyArray<{
        readonly background_color: string | null;
        readonly border_color: string | null;
        readonly text_color: string | null;
        readonly mobile_background_color: string | null;
        readonly mobile_border_color: string | null;
        readonly mobile_text_color: string | null;
        readonly action_title: unknown | null;
        readonly action: {
            readonly _linkType: string | null;
            readonly url?: string;
        } | null;
    }> | null;
    readonly " $refType": "Header_data";
};
export type Header_data$data = Header_data;
export type Header_data$key = {
    readonly " $data"?: Header_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Header_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Header_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pata_pila_icon",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeaderSocial_media",
      "kind": "LinkedField",
      "name": "social_media",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "social_icon",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "social_name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "social_link",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeaderHeader_links",
      "kind": "LinkedField",
      "name": "header_links",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "link_title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "link_url",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeaderAction_buttons",
      "kind": "LinkedField",
      "name": "action_buttons",
      "plural": true,
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
          "name": "border_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mobile_background_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mobile_border_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mobile_text_color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "action_title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "action",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Header"
};
})();
(node as any).hash = 'b2c51b03806c82eab9682d0883ec081f';
export default node;
