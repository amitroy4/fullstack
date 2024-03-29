import React from 'react'
import { Card, Space, Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {

    let navigate = useNavigate()
    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = {
            name: values.name,
            email: values.email,
            password: values.password,
        }

        let userData = await axios.post("http://localhost:8000/api/v1/auth/registration", data)
        console.log("dataEmail",userData);
        if (userData.data.email) {
            navigate(`/otp/${userData.data.email}`)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Space direction="vertical" size={16}>
                <Card
                    title="Registration"
                    style={{
                        width: 300,
                    }}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                           
                        <Link to="/forgotpassword">Forgot Password</Link>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </>

    )
}

export default Registration