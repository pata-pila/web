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
  "kind": "ScalarField",
  "alias": null,
  "name": "_linkType",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "NewsBanner_data",
  "type": "News_banner",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "articles_list",
      "storageKey": null,
      "args": null,
      "concreteType": "News_bannerArticles_list",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "article_image",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "newspaper_icon",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "article_title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "article_url",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "InlineFragment",
              "type": "_ExternalLink",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '369afb94c69c3b460561b89c80d81bff';
export default node;
