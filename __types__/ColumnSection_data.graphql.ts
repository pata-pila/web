/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ColumnSection_data = {
    readonly section_title: unknown | null;
    readonly section_background: string | null;
    readonly subsections_list: ReadonlyArray<{
        readonly subsection: ({
            readonly __typename: "Subsection";
            readonly " $fragmentRefs": FragmentRefs<"Subsection_data">;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null;
    }> | null;
    readonly " $refType": "ColumnSection_data";
};
export type ColumnSection_data$data = ColumnSection_data;
export type ColumnSection_data$key = {
    readonly " $data"?: ColumnSection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ColumnSection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ColumnSection_data",
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
      "name": "section_background",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Column_sectionSubsections_list",
      "kind": "LinkedField",
      "name": "subsections_list",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "subsection",
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
                  "name": "Subsection_data"
                }
              ],
              "type": "Subsection"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Column_section"
};
(node as any).hash = '7ff872e00a2ab5bb7632f5fcc6d436c0';
export default node;
