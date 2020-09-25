import React from "react";
import initEnvironment from "./createRelayEnvironment";
import { fetchQuery, ReactRelayContext } from "react-relay";

export default (ComposedComponent, options = {}) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`;

    static async getInitialProps(ctx) {
      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      let queryProps = {};
      let queryRecords = {};
      const environment = initEnvironment();
      const variables = (options.setupVars && options.setupVars(ctx)) || {};
      if (options.query) {
        // Provide the `url` prop data in case a graphql query uses it
        // const url = { query: ctx.query, pathname: ctx.pathname }
        // TODO: Consider RelayQueryResponseCache
        // https://github.com/facebook/relay/issues/1687#issuecomment-302931855
        queryProps = await fetchQuery(environment, options.query, variables);
        queryRecords = environment.getStore().getSource().toJSON();
      }

      return {
        ...composedInitialProps,
        ...queryProps,
        queryRecords,
        variables,
      };
    }

    constructor(props) {
      super(props);
      this.environment = initEnvironment({
        records: props.queryRecords,
      });
    }

    render() {
      const { variables, url } = this.props;

      return (
        <ReactRelayContext.Provider
          value={{ environment: this.environment, variables, url }}
        >
          <ComposedComponent {...this.props} />
        </ReactRelayContext.Provider>
      );
    }
  };
};
