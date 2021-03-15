import * as React from "react";
import HeaderPanel from "../component/layout/headerPanel/HeaderPanel";
import MiddleContent from "../component/layout/middleContent/MiddleContent";

export interface RootProps { }

export interface RootState { }


class Root extends React.Component<RootProps, RootState> {
  constructor(props: RootProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderPanel />
        <MiddleContent >
          <div key="footer">footer</div>
        </MiddleContent>
      </React.Fragment>
    )
  }
}

export default Root;