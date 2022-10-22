import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Input, Select, Button, Form } from "antd";

import { CaretUpOutlined } from "@ant-design/icons";
import { shiftPoint } from "@function";
import { ShiftPointCrops } from "@types";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ShiftPoint: NextPage = () => {
  const [formValue, setFormValue] = useState<ShiftPointCrops>({
    axis: 0,
    direction: 0,
    lat: 0,
    lon: 0,
    z: 0,
    distance: 0,
  });

  const [form] = Form.useForm();

  const onFinish = (values: ShiftPointCrops) => {
    // format value from string to number
    Object.keys(values).map((key) => {
      values[key] = parseFloat(values[key]);
    });

    console.log(values);
    setFormValue(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    
    <div className={styles.container}>
      <p>
        Vì viết tiếng Anh sợ người đọc không hiểu nên xin phép được viết tài liệu bằng tiếng việt 😊
      </p>
      <h3 style={{ color: "white" }}>
        Tịnh tiến điểm (Shift point)
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được toạ độ của một điểm có khoảng cách nhất định từ một điểm gốc cho trước. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục tịnh tiến, gồm có trục Ox và Oy ứng với trục đã vẽ trên bản đồ</li>
        <li>Direction là hướng tịnh tiến, chọn giá trị positive (dương) sẽ tịnh tiến điểm theo chiều dương của trục toạ độ đã chọn. Ngược lại với giá trị negative (âm)</li>
        <li>Longitude là giá trị kinh độ của điểm gốc (giá trị đầu của điểm gốc)</li>
        <li>Latitude là giá trị vĩ độ của điểm gốc (giá trị thứ hai của điểm gốc)</li>
        <li>Z offset là giá trị z của điểm gốc (giá trị thứ ba của điểm gốc)</li>
        <li>Distance là khoảng cách tịnh tiến tính bằng đơn vị mét so với điểm gốc (vui lòng nhập số nguyên dương)</li>
      </ul>
      <p>
        Nhấn nút Shift, công cụ sẽ trả về toạ độ của điểm đã tịnh tiến.
      </p>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ backgroundColor: "white" }}
      >
        <Form.Item name="axis" label="Axis" rules={[{ required: true }]}>
          <Select placeholder="Choose shift axis" style={{ width: 300 }}>
            <Option value="0">Ox</Option>
            <Option value="1">Oy</Option>
            <Option value="2">Oz</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="direction"
          label="Direction"
          rules={[{ required: true }]}
        >
          <Select placeholder="Choose shift direction" style={{ width: 300 }}>
            <Option value="1">Positive</Option>
            <Option value="-1">Negative</Option>
          </Select>
        </Form.Item>
        <Form.Item name="lon" label="Longitude" rules={[{ required: true }]}>
          <Input placeholder="Longitude" />
        </Form.Item>
        <Form.Item name="lat" label="Latitude" rules={[{ required: true }]}>
          <Input placeholder="Latitude" />
        </Form.Item>
        <Form.Item name="z" label="Z offset" rules={[{ required: true }]}>
          <Input placeholder="Z offset" />
        </Form.Item>
        <Form.Item
          name="distance"
          label="Distance"
          rules={[{ required: true }]}
        >
          <Input placeholder="Distance" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            icon={<CaretUpOutlined />}
            size={"large"}
            htmlType="submit"
          >
            Shift
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <TextArea
        rows={10}
        placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi"
        value={shiftPoint(formValue)}
      />
    </div>
  );
};

export default ShiftPoint;
