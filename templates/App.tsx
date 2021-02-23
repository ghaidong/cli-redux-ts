import * as React from "react";
// import AntComponent from "./component/demo/AntComponent";
// import LodashComponent from "./component/demo/LodashDemo";
import Root from "./container/Root"

export interface AppProps {

}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    return <Root />
    // return <AntComponent />
  }
}

export default App;