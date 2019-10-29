import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import logo from "./logo.png";
import "./Frame.less";
import { withRouter } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

@withRouter
class Frame extends Component {
  onMenuClick = ({ key}) => {
    console.log({ key})
    console.log(this.props)
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout style={{minHeight:'100%'}}>
        <Header className="react-header" style={{ background: "#000" }}>
          <div className="react-logo">
            <img src={logo} alt="ReactProject" />
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                //初始高亮
                selectedKeys={[this.props.location.pathname]}
                // defaultSelectedKeys={[this.props.location.pathname]}
                // defaultOpenKeys={["sub1"]}
                onClick={this.onMenuClick}
                style={{ height: "100%" }}
              >
                {/* <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item> */}
                {this.props.menus.map(item => {
                  return (
                    <Menu.Item 
                    key={item.pathname}
                    >
                    <Icon type={item.Icon}/>
                    {item.title}</Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Frame