/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactBanner_data = {
    readonly title: unknown | null;
    readonly icons: ({
        readonly __typename: "Icon_list";
        readonly elements: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ImpactItem_data">;
        }> | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
    readonly background_image: unknown | null;
    readonly " $refType": "ImpactBanner_data";
};
export type ImpactBanner_data$data = ImpactBanner_data;
export type ImpactBanner_data$key = {
    readonly " $data"?: ImpactBanner_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactBanner_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImpactBanner_data",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Icon_listElements",
              "kind": "LinkedField",
              "name": "elements",
              "plural": true,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ImpactItem_data"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Icon_list"
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
(node as any).hash = 'ee3cc8467c22352e472e4f118ebdede6';
export default node;
