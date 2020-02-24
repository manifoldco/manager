import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom';

import Marketplace from './Marketplace';

type Props = RouteComponentProps<{}>;

class Managed extends React.Component<Props> {
  render() {
    const {
      match: { path }
    } = this.props;

    return (
      <Switch>
        <Route component={Marketplace} path={path} />
      </Switch>
    );
  }
}

export default withRouter(Managed);
