// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";

// Component
import { Props } from "./IconList.types";
import { ItemContainer as Item } from "./Item";

export const IconList: FC<Props> = (props) => {
  const { elements } = props;
  return (
    <article>
      <div className="section-content mobile-column">
        <div>
          {elements.map((item, index) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </article>
  );
};

export const IconListContainer = createFragmentContainer(
  singleFragmentComponent(IconList),
  {
    data: graphql`
      fragment IconList_data on Icon_list {
        list_name
        elements {
          ...Item_data
        }
      }
    `,
  }
);
