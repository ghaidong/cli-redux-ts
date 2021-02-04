import * as React from "react";
import HeaderPanel from "../component/layout/headerPanel/HeaderPanel";
import MiddleContent from "../component/layout/middleContent/MiddleContent";
import MainMenu from "../container/menuLeft/MainMenu";
import BlackListManager from "./blackListManger/BlackListManager";

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
          <MainMenu menuData={getMenuData()} key="leftMenu" />
          <BlackListManager key="rightContent" />
          <div key="footer">footer</div>
        </MiddleContent>
      </React.Fragment>
    )
  }
}

export default Root;

function getMenuData() {
  let menuList = [
    {
      name: "接入服务",
      path: "/service",
      children: [
        {
          name: "黑名单管理",
          path: "blackList"
        }, {
          name: "网关型号管理",
          path: "gatewayTypeManager"
        }, {
          name: "虚拟网关版本管理",
          path: "vGatewayVersionManager"
        }
      ]
    },
    {
      name: "Open API 管理",
      path: "/api",
      children: [
        {
          name: "api列表",
          path: "apiList"
        }
      ]
    }
  ]
  return menuList
}