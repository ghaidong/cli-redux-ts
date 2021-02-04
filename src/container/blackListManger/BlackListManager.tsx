import * as React from 'react';
import RightControlPrimary from "../controlLine/RightControlPrimary"
import RightControlSub from "../controlLine/RightControlSub"
import BlackListTable from "./BlackListTable"
export interface BlackListManagerProps {

}

export interface BlackListManagerState {

}

class BlackListManager extends React.Component<BlackListManagerProps, BlackListManagerState> {

  render() {
    return (
      <React.Fragment>
        <div className="flex-item-auto">
          <RightControlPrimary key="rightControlPrimary" menuName="黑名单管理" />
          <RightControlSub key="rightControlSub" menuName="黑名单管理" />
        </div>
        <div className="flex-item-scroll">
          {/* <div className="content">rightContent</div> */}
          <div className="content">
            <BlackListTable />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BlackListManager;