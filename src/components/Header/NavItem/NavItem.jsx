import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    const { label, link } = this.props;

    return (
      <li className="nav-item">
        <a className="nav-link" href={ link }>{ label }</a>
      </li>
    )
  }
}

export default NavItem;