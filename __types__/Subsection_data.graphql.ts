/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Subsection_data = {
    readonly body: ReadonlyArray<{
        readonly __typename: "SubsectionBodyImage_section";
        readonly primary: {
            readonly subsection_image: unknown | null;
        } | null;
    } | {
        readonly __typename: "SubsectionBodyParagraph_section";
        readonly primary: {
            readonly subsection_paragraph: unknown | null;
        } | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }> | null;
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "body",
      "plural": true,
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
(node as any).hash = '0a3d40f61851c286b62f2e5ce50c610c';
export default node;
