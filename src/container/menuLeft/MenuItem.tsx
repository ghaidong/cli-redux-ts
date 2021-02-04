import * as React from 'react';
import { Component } from 'react';
export interface MenuItemProps {
  menuName
}

export interface MenuItemState {

}

class MenuItem extends Component<MenuItemProps, MenuItemState> {
  render() {
    return <div className="left-menu-subitem">
      <span className="menu-text">
        {this.props.menuName}
      </span>
    </div>
  }
}

export default MenuItem;