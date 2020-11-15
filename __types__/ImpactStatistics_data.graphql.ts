/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ImpactStatistics_data = {
    readonly title: unknown | null;
    readonly icons: {
        readonly " $fragmentRefs": FragmentRefs<"IconList_data">;
    } | null;
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
      "name": "background_color",
      "storageKey": null
    }
  ],
  "type": "Impact_statistics"
};
(node as any).hash = '70d2f369b579ba818b673707a58b8158';
export default node;
