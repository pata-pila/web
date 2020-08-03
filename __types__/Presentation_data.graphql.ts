/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Presentation_data = {
    readonly title: unknown | null;
    readonly theme: string | null;
    readonly slides: ReadonlyArray<{
        readonly text_alignment: string | null;
        readonly content: unknown | null;
    }> | null;
    readonly " $refType": "Presentation_data";
};
export type Presentation_data$data = Presentation_data;
export type Presentation_data$key = {
    readonly " $data"?: Presentation_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Presentation_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Presentation_data",
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
      "kind": "ScalarField",
      "name": "theme",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PresentationSlides",
      "kind": "LinkedField",
      "name": "slides",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text_alignment",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Presentation"
};
(node as any).hash = '79e908b2436d5281ff8470245df865cc';
export default node;
