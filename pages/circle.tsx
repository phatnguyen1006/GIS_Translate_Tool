import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Input, Select, Button, Form } from "antd";

import { HighlightOutlined } from "@ant-design/icons";
import { drawCircle } from "@function";
import { ICircleProps } from "@types";

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
    <div className={styles.container}>
      <p>
        Vì viết tiếng Anh sợ người đọc không hiểu nên xin phép được viết tài liệu bằng tiếng việt 😊
      </p>
      <h3 style={{ color: "white" }}>
        Vẽ nửa đường tròn
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được tập hợp toạ độ các điểm của một nửa đường tròn vẽ nằm trên trục Oz. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục toạ độ mà đường tròn nằm trên đó cùng với trục Oz</li>
        <li>Longitude start là kinh độ của điểm bắt đầu nửa đường tròn</li>
        <li>Latitude start là vĩ độ của điểm bắt đầu nửa đường tròn</li>
        <li>Longitude end là kinh độ của điểm kết thúc nửa đường tròn</li>
        <li>Latitude end là vĩ độ của điểm kết thúc nửa đường tròn</li>
        <li>X là toạ độ z của 2 điểm bắt đầu và kết thúc</li>
      </ul>
      <p>
        Nhấn nút Draw, công cụ sẽ trả về toạ độ của danh sách điểm thuộc khối sau khi đã tịnh tiến.
      </p>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ backgroundColor: "white" }}
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
            htmlType="submit"
          >
            Draw
          </Button>
          <Button htmlType="button" onClick={onReset}>
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
  );
};

export default Circle;
