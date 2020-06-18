/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NewsBanner_data = {
    readonly _linkType: string | null;
    readonly articles_list: ReadonlyArray<{
        readonly article_image: unknown | null;
        readonly newspaper_icon: unknown | null;
        readonly article_title: unknown | null;
        readonly article_url: {
            readonly _linkType: string | null;
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



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_linkType",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsBanner_data",
  "selections": [
    (v0/*: any*/),
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
            (v0/*: any*/),
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
})();
(node as any).hash = '369afb94c69c3b460561b89c80d81bff';
export default node;
