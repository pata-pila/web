// React/Relay
import React, { FC, useState } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./Malnutrition_section.types";
import css from "./Malnutrition_section.scss";

// External
import Text from "../../text";

const Content = ({
  className,
  title,
  description,
}: {
  className?: string;
  title: unknown;
  description: unknown;
}) => {
  return (
    <div className={classnames(css.menuContent, className)}>
      <Text elements={description} />
    </div>
  );
};

export const Malnutrition_section: FC<Props> = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { malnutrition_title, malnutrition_external_menu } = props;
  return (
  <section
    className={css.malnutritionSection}
    style={{
      backgroundImage: `url(${(props.malnutrition_image_1 as any).url})`
    }}
  >

    <div className={css.sectionTitle}>
      <h1>{props.malnutrition_title}</h1>
    </div>
    <div className={css.sectionContent}>
        <div className={classnames(css.malnutrition_menues, css.webContent)}>
          {props.malnutrition_external_menu.malnutrition_menu.map((menu, index) => (
            <button
              key={index}
              className={classnames(css.malnutrition_menu, {
                [css.selected]: index === selectedMenu,
              })}
              onClick={() => setSelectedMenu(index)}
            >
              <div className={css.menuInfo}>
                <img
                  className={css.menuIcon}
                  alt={menu.malnutrition_menu_item_text[0].text}
                  src={(menu.malnutrition_menu_item as any).url}
                />
                <span className={css.menuTitle}>{menu.malnutrition_menu_item_text[0].text}</span>
              </div>
              <span className={css.menuSelectedIcon}>❯</span>
            </button>
          ))}
        </div>
        
        <Content
          className={css.webContent}
          title={props.malnutrition_external_menu.malnutrition_menu[selectedMenu].malnutrition_menu_item_text}
          description={props.malnutrition_external_menu.malnutrition_menu[selectedMenu].malnutrition_menu_item_description}
        />
      </div>
    
  </section>
  );
};

export const MalnutritionSectionContainer = createFragmentContainer(
    singleFragmentComponent(Malnutrition_section),
    {
      data: graphql`
      fragment MalnutritionSection_data on Malnutrition_section {
        malnutrition_title
        malnutrition_image_1
         malnutrition_external_menu{
          _linkType
          ... on Malnutrition_menu {
            malnutrition_menu {
              malnutrition_menu_item
              malnutrition_menu_item_text
              malnutrition_menu_item_description
            }
          }
        }
      }
      `,
    }
  );