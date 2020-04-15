import React, { FC, ReactElement } from "react";

export interface TextElement extends RichTextElement {
  text: string;
  spans: any;
}

export interface RichTextElement {
  type: string;
}

export interface ImageElement extends RichTextElement{
  url: string;
}

export interface Props {
  elements: [RichTextElement];
}

function getTextType(type: string): (item: RichTextElement) => ReactElement {
  const renderPerType = {
    image: function render(item: RichTextElement): ReactElement {
      const imageElement = item as ImageElement;
      return <img src={imageElement.url} />;
    },
    heading3: function render(item: RichTextElement): ReactElement {
      const textElement = item as TextElement;
      return <h3>{textElement.text}</h3>;
    },
    paragraph: function render(item: RichTextElement): ReactElement {
      const textElement = item as TextElement;
      return <p>{textElement.text}</p>;
    },
  };

  return renderPerType[type];
}

const Text: FC<Props> = (props) => (
  <article>
    {props.elements.map((item) => getTextType(item.type)(item))}
  </article>
);

export default Text;
