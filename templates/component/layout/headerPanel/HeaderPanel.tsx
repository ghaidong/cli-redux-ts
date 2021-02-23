import * as React from 'react';
import styled from "styled-components";

export interface HeaderPanelProps {
}

export interface HeaderPanelState {

}

class HeaderPanel extends React.Component<HeaderPanelProps, HeaderPanelState> {
  constructor(props: HeaderPanelProps) {
    super(props)
  }

  componentDidMount() {

  }
  
  renderUser() {

  }

  render() {
    return (
      <div className="flex-row header-panel">
        <div className="site-name">EMOP 控制台</div>
        <div className="flex-item"></div>
        <div className="user-name">emopadmin</div>
      </div >
    )
  }
}
export default HeaderPanel;