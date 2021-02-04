import * as React from "react";
import Button from "antd/es/button"
import throttle from "lodash/throttle"

export interface LoadashDemoProps {

}

export interface LoadashDemoState {

}

let throttleObj = Object.create(null)
class LoadashDemo extends React.Component<LoadashDemoProps, LoadashDemoState> {
  constructor(props: LoadashDemoProps) {
    super(props);
  }

  throttleClick() {
    if (!(throttleObj && throttleObj.demo)) { throttleObj.demo = throttle(() => console.log("throttlee"), 1000) }
    throttleObj.demo()
    console.log("throttle-click")
  }

  debounceClicke() {
    console.log("debounce-click")
  }

  render() {
    return (
      <React.Fragment>
        <Button type="primary" onClick={this.throttleClick}>throttleButton</Button>
        <Button type="primary" onClick={this.debounceClicke}>debounceButton</Button>
      </React.Fragment>
    )
  }
}

export default LoadashDemo;