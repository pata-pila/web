/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Subsection_data = {
    readonly body: ReadonlyArray<{
        readonly primary?: {
            readonly subsection_image: unknown | null;
            readonly subsection_paragraph?: unknown | null;
        } | null;
    }> | null;
    readonly __typename: "Subsection";
    readonly " $refType": "Subsection_data";
};
export type Subsection_data$data = Subsection_data;
export type Subsection_data$key = {
    readonly " $data"?: Subsection_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Subsection_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Subsection_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
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
              "concreteType": "SubsectionBodyImage_sectionPrimary",
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
          "type": "SubsectionBodyImage_section"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SubsectionBodyParagraph_sectionPrimary",
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
          "type": "SubsectionBodyParagraph_section"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Subsection"
};
(node as any).hash = '6f03eb51cfaa94448fab73215b2ad66a';
export default node;
