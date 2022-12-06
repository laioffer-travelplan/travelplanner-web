import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom";
// import {BASE_URL} from "../constants";
import { login } from "../utils";

function Login(props) {
<<<<<<< HEAD
  const { handleLoggedIn, onSuccess } = props;
  console.log(handleLoggedIn)
  const onFinish = (data) => {
    login(data)
      .then((res) => {
        handleLoggedIn();
        message.success(`Login Successful`);
        onSuccess();
=======
  const { handleLoggedIn } = props;

  const onFinish = (data) => {
    
    login(data)
      .then((res) => {
        const { data } = res;
        handleLoggedIn(data);
        message.success(`Login Successful`);
        //this.props.onSuccess();
>>>>>>> 53214a21db3af415f75ab207cd5d523da773a0a1
      })
      .catch((err) => {
        console.log("login failed: ", err.message);
        message.error(err.message);
      })
  };
  
    return (
      <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    )
}

export default Login