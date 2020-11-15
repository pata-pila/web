/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NewsBanner_data = {
    readonly articles_list: ReadonlyArray<{
        readonly article_image: unknown | null;
        readonly newspaper_icon: unknown | null;
        readonly article_title: unknown | null;
        readonly article_url: {
            readonly _meta?: {
                readonly id: string;
            };
            readonly url?: string;
        } | null;
    }> | null;
    readonly " $refType": "NewsBanner_data";
};
export type NewsBanner_data$data = NewsBanner_data;
export type NewsBanner_data$key = {
    readonly " $data"?: NewsBanner_data$data;
    readonly " $fragmentRefs": FragmentRefs<"NewsBanner_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsBanner_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "News_bannerArticles_list",
      "kind": "LinkedField",
      "name": "articles_list",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "article_image",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "newspaper_icon",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "article_title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "article_url",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Meta",
              "kind": "LinkedField",
              "name": "_meta",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
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
      "storageKey": null
    }
  ],
  "type": "News_banner"
};
(node as any).hash = '9e68499ed2d18ba65bf3406bc9d65144';
export default node;
