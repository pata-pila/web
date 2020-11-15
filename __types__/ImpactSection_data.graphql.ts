/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactSection_data = {
    readonly title: unknown | null;
    readonly icons: {
        readonly " $fragmentRefs": FragmentRefs<"IconList_data">;
    } | null;
    readonly background_image: unknown | null;
    readonly " $refType": "ImpactSection_data";
};
export type ImpactSection_data$data = ImpactSection_data;
export type ImpactSection_data$key = {
    readonly " $data"?: ImpactSection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactSection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImpactSection_data",
  "selections": [
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "icons",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IconList_data"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "background_image",
      "storageKey": null
    }
  ],
  "type": "Impact_section"
};
(node as any).hash = '5038666853432003a47bca731a617086';
export default node;
