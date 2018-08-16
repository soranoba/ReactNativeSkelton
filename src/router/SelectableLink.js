/**
 * @author Hinagiku Soranoba <soranoba@gmail.com>
 * @license MIT
 */
import React from 'react';
import { Route, Link } from 'react-router-native';
import PropTypes from 'prop-types';

/**
 * CustomLink of 'react-router', which set `selected` to child.props.
 *
 * - This Component allow only single child.
 * - For currently displayed pages, the props.selected of child will equal to true.
 *
 * See: https://reacttraining.com/react-router/native/example/custom-link
 */
export default class SelectableLink extends React.Component {
  static propTypes = {
    ...Link.propTypes,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { to, children, activeOnlyWhenExact, ...rest } = this.props;
    const link = ({ match }) => {
      return (
        <Link style={{ flex: 1 }} to={to} {...rest}>
          {React.cloneElement(React.Children.only(children), { selected: match && match.isExact })}
        </Link>
      );
    };
    return <Route path={to} exact={activeOnlyWhenExact} children={link} />;
  }
}
