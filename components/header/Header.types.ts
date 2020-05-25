export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  data: {
    type: string;
    text: string;
    spans: any[];
  };
}
