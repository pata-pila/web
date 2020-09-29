import { createFragmentContainer, graphql } from "react-relay";
import TextCard from "./TextCard";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

export default createFragmentContainer(singleFragmentComponent(TextCard), {
  data: graphql`
    fragment TextCard_data on Text_card {
      background_color
      text
    }
  `,
});
