import * as React from 'react'
import MenuItem from './MenuItem'

export interface MainMentProps {
  menuData
}

export interface MainMentState {

}

class MainMent extends React.Component<MainMentProps, MainMentState> {
  constructor(props: MainMentProps) {
    super(props)
    console.log("menuData", props.menuData)
  }

  render() {
    return (
      <div className="flex-item left-menu">
        {
          this.props.menuData.map((item, no) => <div key={no + "Item"}>
            <div className="left-menu-item">{item.name}</div>
            {item.children.map((subItem, subno) => <MenuItem key={subno + "subItem"} menuName={subItem.name} />)}
          </div>
          )
        }
      </div>
    )
  }
}

export default MainMent;