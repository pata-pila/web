import React, { ComponentClass, FC } from "react";

type ComposableComponent<TProps> = ComponentClass<TProps> | FC<TProps>;

type SFCFactory = <TProps>(
  TargetComponent: ComposableComponent<TProps>
) => FC<{ data: TProps }>;

// tslint:disable-next-line prettier
const singleFragmentComponent: SFCFactory = <TProps,>(TargetComponent) => {
  const ComposedComponent: FC<{ data: TProps }> = ({ data }) => (
    <TargetComponent {...data} />
  );

  ComposedComponent.displayName = `SingleFragment(${TargetComponent.displayName})`;

  return ComposedComponent;
};

export default singleFragmentComponent;
