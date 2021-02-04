import * as React from 'react';

export interface RightControlPrimaryProps {
  menuName: String
}

export interface RightControlPrimaryState {

}

class RightControlPrimary extends React.Component<RightControlPrimaryProps, RightControlPrimaryState> {
  render() {
    return (
      <div key="rightControlPrimary" className="right-control-primary">
        <div className="color-lump"></div>
        <span className="right-title">{this.props.menuName}</span>
      </div>
    );
  }
}

export default RightControlPrimary;