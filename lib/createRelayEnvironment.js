import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetch from "isomorphic-unfetch";
import url from "url";

let relayEnvironment = null;

function fetchPrismicRef() {
  return fetch("https://pata-pila-web.prismic.io/api/v2", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((body) => body.refs[0].ref);
}

function fetchFromPrismic(prismicRef, operation, variables) {
  console.log("Operation", operation.text);
  const requestUrl = url.format({
    protocol: "https",
    hostname: "pata-pila-web.prismic.io",
    pathname: "/graphql",
    query: {
      query: operation.text,
      operationName: operation.name,
      variables: JSON.stringify(variables),
    },
  });

  return fetch(requestUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Prismic-ref": prismicRef,
    },
  }).then((res) => res.json());
}

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetchPrismicRef().then((prismicRef) =>
    fetchFromPrismic(prismicRef, operation, variables)
  );
}

export default function initEnvironment({ records = {} } = {}) {
  // Create a network layer from the fetch function
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource(records));

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return new Environment({
      network,
      store,
    });
  }

  // reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = new Environment({
      network,
      store,
    });
  }

  return relayEnvironment;
}
