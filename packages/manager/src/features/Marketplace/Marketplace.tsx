import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export type CombinedProps = RouteComponentProps<{}>;
const { defineCustomElements } = require('@manifoldco/ui/dist/loader');

export const Marketplace: React.FunctionComponent<CombinedProps> = props => {
  defineCustomElements(window)
  return (
    <React.Fragment>
        <manifold-marketplace></manifold-marketplace>
    </React.Fragment>
  );
};


export default Marketplace;
