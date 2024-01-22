import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { LoginCall } from "../../services/Auth";
import { UserContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import style css
import style from "./DashboardStyle/Adimn.module.scss"


export default function Admin() {
    const { setUser } = useContext(UserContext);
	const navigate=useNavigate()

    const onFinish = (values) => {
        console.log("Success:", values);
        LoginCall(values)
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem("token", data.data.token);
                setUser(data.data.user);
                navigate("/admin");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    
    return (
        <div className={style.admin}>
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
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
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
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
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
        </div>
    );
}
