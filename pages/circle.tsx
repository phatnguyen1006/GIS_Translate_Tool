import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Input, Select, Button, Form } from "antd";

import { HighlightOutlined } from "@ant-design/icons";
import { drawCircle } from "@function";
import { ICircleProps } from "@types";
import DrawCircleDocumentation from "@components/Documentation/drawCircle.docs";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Circle: NextPage = () => {
  const [formValue, setFormValue] = useState<ICircleProps>({
    direction: 0,
    xStart: 0,
    xEnd: 0,
    yStart: 0,
    yEnd: 0,
    z: 0,
  });
  const [form] = Form.useForm();

  const onFinish = (values: ICircleProps) => {
    Object.keys(values).map((key) => {
      values[key] = parseFloat(values[key]);
    });
    console.log(values);
    setFormValue(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <div className={styles.shiftPage}>
      <DrawCircleDocumentation />
      <div className={styles.formArea} style={{ backgroundColor: "white" }}>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className={styles.formContainer}
        >
          <Form.Item
            name="direction"
            label="Axis"
            rules={[{ required: true }]}
          >
            <Select placeholder="Choose draw axis" style={{ width: 300 }}>
              <Option value="0">Ox</Option>
              <Option value="1">Oy</Option>
            </Select>
          </Form.Item>
          <Form.Item name="xStart" label="Longitude start" rules={[{ required: true }]}>
            <Input placeholder="Longitude start" />
          </Form.Item>
          <Form.Item name="yStart" label="Latitude start" rules={[{ required: true }]}>
            <Input placeholder="Latitude start" />
          </Form.Item>
          <Form.Item name="xEnd" label="Longitude end" rules={[{ required: true }]}>
            <Input placeholder="Longitude end" />
          </Form.Item>
          <Form.Item name="yEnd" label="Latitude end" rules={[{ required: true }]}>
            <Input placeholder="Latitude end" />
          </Form.Item>
          <Form.Item name="z" label="Z" rules={[{ required: true }]}>
            <Input placeholder="Z" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              shape="round"
              icon={<HighlightOutlined />}
              size={"large"}
              style={{ width: "30%", minWidth: "100px", marginLeft: "30%", marginRight: "30px" }}
              htmlType="submit"
            >
              Draw
            </Button>
            <Button htmlType="button" onClick={onReset} style={{ width: "100px", marginRight: "30px" }}>
              Reset
            </Button>
          </Form.Item>
        </Form>

        <TextArea
          rows={10}
          placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi"
          value={drawCircle(formValue)}
        />
      </div>
    </div>
  );
};

export default Circle;
