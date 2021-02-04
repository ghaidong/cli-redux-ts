/**
 * 内容模板
 * 左侧菜单 leftMenu
 * 右侧一级控制菜单 rightControlPrimary
 * 右侧二级控制菜单 rightControlSub
 * 右侧内容区域 rightContent
 * 网站 footer
 */
import * as React from 'react'

export interface MiddleContentProps {

}

export interface MiddleContentState {

}

class MiddleContent extends React.Component<MiddleContentProps, MiddleContentState> {

  render() {
    let children = React.Children.toArray(this.props.children)
    let leftMenu = children.find(dom => dom["key"] === ".$leftMenu")
    let rightContent = children.find(dom => dom["key"] === '.$rightContent')
    return (
      <div className="flex-row middle-content">
        <div className="flex-item-auto flex-column left-panel">
          {leftMenu}
        </div>
        <div className="flex-item flex-column">
          {rightContent}
          <div className="flex-item-auto">
            <div className="footer-panel">footer</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MiddleContent;