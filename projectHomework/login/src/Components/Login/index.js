import { Form, Icon, Input, Button, Checkbox } from 'antd'
import React,{Component} from 'react'
import 'antd/dist/antd.css'
import './index.css';

export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              style={{width:'250px'}}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              style={{width:'250px'}}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="https://blog.csdn.net/weixin_41544124/article/details/87077344">
            Forgot password
          </a>
          <div>
              <Button style={{width:'250px'}} type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
          </div>
          Or <a href="https://ant.design/components/form-cn/">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

// const LoginForm = Form.create({ name: 'normal_login' })(Login);
