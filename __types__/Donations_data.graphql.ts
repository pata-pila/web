/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Donations_data = {
    readonly donation_link: {
        readonly url?: string;
    } | null;
    readonly " $refType": "Donations_data";
};
export type Donations_data$data = Donations_data;
export type Donations_data$key = {
    readonly " $data"?: Donations_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Donations_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Donations_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "donation_link",
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
  "type": "Donations"
};
(node as any).hash = '69308b75e7ce86b82c28c843e831c1d1';
export default node;
