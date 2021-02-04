import * as React from 'react';
import { Button } from "antd"
export interface RightControlSubProps {
  menuName: String
}

export interface RightControlSubState {

}

class RightControlSub extends React.Component<RightControlSubProps, RightControlSubState> {
  constructor(props: RightControlSubProps) {
    super(props);
  }
  render() {
    switch (this.props.menuName) {
      case "黑名单管理":
        return (
          <div className="right-control-sub">
            <Button>添加黑名单</Button>
            <Button>操作记录</Button>
          </div>
        );
        break;
      default:
        return <div> null </div>
    }

  }
}

export default RightControlSub;