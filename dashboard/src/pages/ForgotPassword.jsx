import React from 'react'
import { Card, Space, Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const ForgotPassword = () => {

    // let { email } = useParams()
    // console.log(email);
    let navigate = useNavigate()
    const onFinish = async (values) => {
        // console.log('Success:', values);
        let data = {
            email: values.email,
        }

        let forgotPasswordData = await axios.post("http://localhost:8000/api/v1/auth/forgotpassword", data)
        console.log(forgotPasswordData.data);
        if (forgotPasswordData.data.success == "OTP matched") {
            navigate("/login")
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Space direction="vertical" size={16}>
                <Card
                    title="Forgot Password"
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
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input otp!',
                                },
                            ]}
                        >
                            <Input />
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

export default ForgotPassword