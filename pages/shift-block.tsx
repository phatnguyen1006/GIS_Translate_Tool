import { useState } from "react";
import type { NextPage } from "next";
import { Input, Select, Button, Form } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

import { shiftBlock } from "@function";
import { ShiftPointCrops } from "@types";
import { splitFunction, ILocationInput } from "@helpers";

import styles from "../styles/Home.module.css";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ShiftBlock: NextPage = () => {
  const [formValue, setFormValue] = useState<Array<ShiftPointCrops>>([
    {
      axis: 0,
      direction: 0,
      lat: 0,
      lon: 0,
      z: 0,
      distance: 0,
    },
  ]);
  const [shiftedLocation, setShiftedLocation] = useState<string>();

  const [form] = Form.useForm();

  const onFinish = (values: ILocationInput) => {
    const listShiftPointCrops = splitFunction(values);

    if (Array.isArray(listShiftPointCrops)) {
      setShiftedLocation(shiftBlock(listShiftPointCrops));
    }
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
        Tịnh tiến khối (Shift block)
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được tập hợp toạ độ các điểm của một khối có khoảng cách nhất định từ một khối cho trước. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục tịnh tiến, gồm có trục Ox và Oy ứng với trục đã vẽ trên bản đồ</li>
        <li>Direction là hướng tịnh tiến, chọn giá trị positive (dương) sẽ tịnh tiến điểm theo chiều dương của trục toạ độ đã chọn. Ngược lại với giá trị negative (âm)</li>
        <li>Point array là danh sách các điểm của khối cần tịnh tiến (nhập đúng định dạng mảng của javascript)</li>
        <li>Distance là khoảng cách tịnh tiến tính bằng đơn vị mét so với điểm gốc (vui lòng nhập số nguyên dương)</li>
      </ul>
      <p>
        Nhấn nút Shift, công cụ sẽ trả về toạ độ của danh sách điểm thuộc khối sau khi đã tịnh tiến.
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
        {/* <Form.Item name="long" label="Longitude" rules={[{ required: true }]}>
          <Input placeholder='Longitude' />
        </Form.Item>
        <Form.Item name="lat" label="Latitude" rules={[{ required: true }]}>
          <Input placeholder='Latitude' />
        </Form.Item > */}
        <Form.Item
          name={"location"}
          label="Point array"
          rules={[{ required: true, type: "string" }]}
        >
          <Input.TextArea placeholder="[longtude, latitude]" />
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
        rows={15}
        placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi"
        value={shiftedLocation}
      />
    </div>
  );
};

export default ShiftBlock;
