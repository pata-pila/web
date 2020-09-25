/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactStatistics_data = {
    readonly title: unknown | null;
    readonly icons: ({
        readonly __typename: "Icon_list";
        readonly " $fragmentRefs": FragmentRefs<"IconList_data">;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
    readonly background_color: string | null;
    readonly " $refType": "ImpactStatistics_data";
};
export type ImpactStatistics_data$data = ImpactStatistics_data;
export type ImpactStatistics_data$key = {
    readonly " $data"?: ImpactStatistics_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ImpactStatistics_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImpactStatistics_data",
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
      "name": "background_color",
      "storageKey": null
    }
  ],
  "type": "Impact_statistics"
};
(node as any).hash = 'c4998b1a40e090b797158ee5559756e9';
export default node;
