import React from "react";
import { useRouteByDocumentId } from "lib/RoutesContext";

const mainDomain = "patapila.org";

function isLinkPointingToMainDomain(link) {
  const url = new URL(link);
  return url.hostname.endsWith(mainDomain);
}

/* Schema needed for GraphqlLink:
link {
  ... on _ExternalLink {
    url
  }
  ... on _Document {
    _meta {
      id
    }
  }
}
*/

export interface GraphqlLink {
  url?: string;
  _meta?: {
    id: string;
  };
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * This is the value of a `_Linkable` in the prismic schema.
   * It can either be an external link or a document link.
   */
  graphqlLink: GraphqlLink;
}

export default function DocumentLink({ graphqlLink, ...elementProps }: Props) {
  const routeByDocumentId = useRouteByDocumentId();
  const documentId = graphqlLink._meta?.id;

  let href: string = graphqlLink.url ?? "";
  let target: string | undefined;

  if (href && !isLinkPointingToMainDomain(href)) {
    target = "_blank";
  } else if (href && isLinkPointingToMainDomain(href)) {
    target = undefined;
  } else if (documentId) {
    href = routeByDocumentId.get(documentId) ?? "";
    target = undefined;
    if (!href) {
      console.warn("Route not found for document id", documentId);
    }
  } else {
    href = "#";
    console.warn("graphqlLink has no `href` or `_meta.id`", graphqlLink);
  }
  return (
    <a href={href} target={target} {...elementProps}>
      {elementProps.children}
    </a>
  );
}
