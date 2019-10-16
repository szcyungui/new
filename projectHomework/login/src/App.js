import React, { Component } from "react";
import { Form } from "antd";
import { Login } from "./Components";
import img from 'b'

const LoginForm = Form.create({ name: "normal_login" })(Login);

export default class App extends Component {
  render() {
    const bgGround = {
      display: "inline-block",
      height: "40px",
      width: "40px",
      backgroundImage: 'url(' +img + ')'//图片的路径
    };
    return (
      <span style={bgGround}>
        <LoginForm />
      </span>
    );
  }
}
