import React from "react";
import { useRouteByDocumentId } from "lib/RoutesContext";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * This is the value of `_Document._meta.id` of the prismic schema.
   */
  documentId: string;
}

export default function DocumentLink({ documentId, ...elementProps }: Props) {
  const routeByDocumentId = useRouteByDocumentId();
  const route = routeByDocumentId.get(documentId) ?? "";
  if (!route) {
    console.warn("Route not found for document id", documentId);
  }
  return (
    <a href={route} {...elementProps}>
      {elementProps.children}
    </a>
  );
}
