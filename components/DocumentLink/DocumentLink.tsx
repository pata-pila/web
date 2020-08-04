import React from "react";
import { useRouteByDocumentId } from "lib/RoutesContext";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * This is the value of `_Document._meta.id` of the prismic schema.
   */
  documentId: string;
}

export default function DocumentLink(props: Props) {
  const routeByDocumentId = useRouteByDocumentId();
  const route = routeByDocumentId.get(props.documentId) ?? "";
  if (!route) {
    console.warn("Route not found for document id", props.documentId);
  }
  const elementProps = { ...props };
  delete elementProps.documentId;
  return (
    <a href={route} {...elementProps}>
      {props.children}
    </a>
  );
}
