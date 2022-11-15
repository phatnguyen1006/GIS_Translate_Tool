import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { AuthContext } from 'context/authContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Insert.module.css';

type SizeType = Parameters<typeof Form>[0]['size'];

interface ILoginInput {
    username: string;
    password: string;
}

export type IIsLoggedInStorage = "true" | "false";

const Login: React.FC = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const passwordPattern = "2332";

    useEffect(() => {
        if (typeof window != "undefined") {
            let cacheTask = localStorage.getItem("isLoggedIn");
            if (cacheTask == "true") {
                setIsLoggedIn(true);
            }
        }
    }, []);

    const onFinish = (values: ILoginInput) => {
        setIsLoggedIn(values.password === passwordPattern);
        if (values.password === passwordPattern && typeof window !== 'undefined') {
            localStorage.setItem("username", values.username);
            localStorage.setItem("isLoggedIn", "true");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Your name"
                        name="username"
                        style={{ color: "white" }}
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;