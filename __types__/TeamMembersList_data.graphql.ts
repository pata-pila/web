/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TeamMembersList_data = {
    readonly member: ReadonlyArray<{
        readonly name: string | null;
        readonly position: string | null;
    }> | null;
    readonly " $refType": "TeamMembersList_data";
};
export type TeamMembersList_data$data = TeamMembersList_data;
export type TeamMembersList_data$key = {
    readonly " $data"?: TeamMembersList_data$data;
    readonly " $fragmentRefs": FragmentRefs<"TeamMembersList_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TeamMembersList_data",
  "type": "Team_members_list",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "member",
      "storageKey": null,
      "args": null,
      "concreteType": "Team_members_listMember",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "position",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'f6314d882568cf148229b7beb975ec37';
export default node;
