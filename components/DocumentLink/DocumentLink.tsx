import React from "react";
import { useRouteByDocumentId } from "lib/RoutesContext";

interface Props extends Record<string, unknown> {
  id: string;
  children?: React.ReactNode;
}

export default function DocumentLink(props: Props) {
  const routeByDocumentId = useRouteByDocumentId();
  const route = routeByDocumentId.get(props.id) ?? "";
  if (!route) {
    console.warn("Route not found for document id", props.id);
  }
  return <a href={route}>{props.children}</a>;
}
