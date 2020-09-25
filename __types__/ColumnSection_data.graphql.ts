/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ColumnSection_data = {
    readonly section_title: unknown | null;
    readonly section_background: string | null;
    readonly section_title_color: string | null;
    readonly body: ReadonlyArray<{
        readonly primary?: {
            readonly subsection_image: unknown | null;
            readonly subsection_paragraph?: unknown | null;
        } | null;
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
      "kind": "ScalarField",
      "name": "section_title_color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "body",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Column_sectionBodyImage_sectionPrimary",
              "kind": "LinkedField",
              "name": "primary",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "subsection_image",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Column_sectionBodyImage_section"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Column_sectionBodyParagraph_subsectionPrimary",
              "kind": "LinkedField",
              "name": "primary",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "subsection_paragraph",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Column_sectionBodyParagraph_subsection"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Column_section"
};
(node as any).hash = '17939a5be7af3dadd97b0591f131a186';
export default node;
