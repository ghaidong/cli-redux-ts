import * as React from "react";
import { Button, Form, Select, InputNumber, DatePicker, Switch, Slider, Table } from 'antd';

import data from "../../assets/data/template/getParameterDetail"

const { Option } = Select;

export default class AntComponent extends React.Component {

  renderTable() {
    let result = data.data.getParameterDetail.Result || []
    return (
      <div style={{ height: "500px", overflowX: "hidden", overflowY: "scroll" }}>
        {/* <Table
          columns={[
            { title: '数据点名称', dataIndex: 'ParaName', width: 210, fixed: true },
            { title: '参数类别', dataIndex: 'ParaName', key: '2', width: 80 },
            { title: '缩略名', dataIndex: 'ParaName', key: '3', width: 120 },
            { title: '比例系数', dataIndex: 'ParaName', key: '4', width: 200 },
            { title: '单位', dataIndex: 'ParaName', key: '5', width: 200 },
            { title: '数据类型', dataIndex: 'ParaName', key: '6', width: 200 },
            { title: '传输类型', dataIndex: 'ParaName', key: '7', width: 200 },
            { title: '寄存器地址', dataIndex: 'ParaName', key: '8', width: 200 },
            { title: '寄存器大小', dataIndex: 'ParaName', key: '9', width: 200 },
            { title: '取值范围', dataIndex: 'ParaName', key: '10', width: 200 },
            { title: '读写属性', dataIndex: 'ParaName', key: '11', width: 200 }
          ]}
          dataSource={result}
          scroll={{ x: 2010, y: false }}
          pagination={false}
        /> */}
        <Table
          columns={[
            { title: '数据点名称', dataIndex: 'ParaName', width: 210, fixed: true},
            { title: '参数类别', dataIndex: 'ParaName', key: '2', width: 80, className:"no-wrap"},
            { title: '缩略名', dataIndex: 'ParaName', key: '3', width: 120 },
            { title: '比例系数', dataIndex: 'ParaName', key: '4', width: 200 },
            { title: '单位', dataIndex: 'ParaName', key: '5', width: 200 },
            { title: '数据类型', dataIndex: 'ParaName', key: '6', width: 200 },
            { title: '传输类型', dataIndex: 'ParaName', key: '7', width: 200 },
            { title: '寄存器地址', dataIndex: 'ParaName', key: '8', width: 200 },
            { title: '寄存器大小', dataIndex: 'ParaName', key: '9', width: 200 },
            { title: '取值范围', dataIndex: 'ParaName', key: '10', width: 200 },
            { title: '读写属性', dataIndex: 'ParaName', key: '11', width: 200 }
          ]}
          dataSource={result}
          scroll={{ x: 2010, y: false }}
          pagination={false}
        />
        
      </div>
    )
  }
  renderForm() {
    return (
      <Form style={{ marginTop: 32 }}>
        <Form.Item
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className="ant-form-text"> 台机器</span>
          <a href="https://ant.design">链接文字</a>
        </Form.Item>
        <Form.Item
          label="开关"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item
          label="滑动输入条"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item
          label="选择器"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="日期选择框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Button type="primary" htmlType="submit"> 确定 </Button>
          <Button style={{ marginLeft: 8 }}> 取消 </Button>
        </Form.Item>
      </Form>
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.renderTable()}
        {this.renderForm()}
      </React.Fragment>
    )
  }
}
