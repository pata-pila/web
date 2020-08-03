import React, { createRef, FC, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import classnames from "classnames";

import css from "./Slider.scss";

const Slider: FC<any> = (props) => {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [slideRefs, setSlideRefs] = React.useState([]);

  // Event handlers
  const onNavTo = (slideIndex) => () => {
    setNextSlide(slideIndex);
  };
  const onScrollBy = (slideIndex) => (scrollingIntoSlide) => {
    if (scrollingIntoSlide) {
      setCurrentSlide(slideIndex);
    }
  };

  // Effects
  useEffect(() => {
    setSlideRefs((elRefs) =>
      props.children.map((_, i) => elRefs[i] || createRef())
    );
  }, [props.children]);
  useEffect(() => {
    if (slideRefs[nextSlide]) {
      slideRefs[nextSlide].current.node.scrollIntoView();
    }
  }, [nextSlide]);

  return (
    <section className={classnames(css.slider, props.className)}>
      <ul className={css.slides}>
        {props.children.map((child, thisSlide) => (
          <InView
            key={thisSlide}
            ref={slideRefs[thisSlide]}
            threshold={0.5}
            as="li"
            onChange={onScrollBy(thisSlide)}
          >
            {child}
          </InView>
        ))}
      </ul>
      {props.children.length > 1 ? (
        <nav>
          <ul>
            {props.children.map((_, thisSlide) => (
              <li key={thisSlide}>
                <label className={css.sliderNavButton}>
                  <input
                    type="radio"
                    name="slide"
                    checked={currentSlide === thisSlide}
                    onChange={onNavTo(thisSlide)}
                  />
                  <figure className={css.checkmark} />
                </label>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </section>
  );
};

Slider.displayName = "Slider";

export default Slider;
