import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'recompose';
// import { makeStyles, Theme } from 'src/components/core/styles'

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {}
// }))

// interface Props { }

type CombinedProps = RouteComponentProps;

const FirewallRulesLanding: React.FC<CombinedProps> = props => {
  // const classes = useStyles();

  return <h2>Firewall Rules Landing</h2>;
};

export default compose<CombinedProps, {}>(React.memo)(FirewallRulesLanding);
