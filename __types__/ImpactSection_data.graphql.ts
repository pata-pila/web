/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactSection_data = {
    readonly title: unknown | null;
    readonly icons: ({
        readonly __typename: "Icon_list";
        readonly " $fragmentRefs": FragmentRefs<"IconList_data">;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "IconList_data"
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
(node as any).hash = 'fa9d2c9490ffa12e0d1b405333e08a4c';
export default node;
