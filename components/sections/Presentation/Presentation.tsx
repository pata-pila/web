// React/Relay
import React, { FC } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import singleFragmentComponent from "../../../lib/singleFragmentComponent";
import classnames from "classnames";

// Component
import { Props } from "./Presentation.types";
import css from "./Presentation.scss";

// External
import Slider from "../../Slider";
import Text from "../../text";
import { RichText } from "prismic-reactjs";

export const Presentation: FC<Props> = (props) => {
  return (
    <section
      className={classnames(
        props.theme.toLowerCase(),
        css.presentation,
        "section-container"
      )}
    >
      <div className="section-content mobile-column">
        <span className="vertical-title">{props.title[0].text}</span>
        <Slider className={css.slider}>
          {props.slides.map((slide, index) => (
            <article
              key={index}
              className={classnames(
                css.presentationSlide,
                css[`text${slide.text_alignment}`]
              )}
            >
              <Text elements={slide.content} />
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export const PresentationContainer = createFragmentContainer(
  singleFragmentComponent(Presentation),
  {
    data: graphql`
      fragment Presentation_data on Presentation {
        title
        theme
        slides {
          text_alignment
          content
        }
      }
    `,
  }
);
