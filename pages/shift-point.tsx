import { useState } from "react";
import type { NextPage } from "next";
import { Input, Select, Button, Form } from "antd";
import styles from "../styles/Home.module.css";

import { CaretUpOutlined } from "@ant-design/icons";
import { shiftPoint } from "@function";
import { ShiftPointCrops } from "@types";
import ShiftPontDocumentation from "@components/Documentation/shiftPoint.docs";
import Head from "next/head";

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

    <div className={styles.shiftPage}>
      <Head>
        <title>Shifting Point</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ShiftPontDocumentation />
      <div className={styles.formArea} style={{ backgroundColor: "white" }}>
        <Form
          {...layout}
          form={form}
          className={styles.formContainer}
          name="control-hooks"
          onFinish={onFinish}
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
              style={{ width: "30%", minWidth: "100px", marginLeft: "30%", marginRight: "30px" }}
              htmlType="submit"
            >
              Shift
            </Button>
            <Button htmlType="button" onClick={onReset} style={{ width: "100px", marginRight: "30px" }}>
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
    </div>
  );
};

export default ShiftPoint;
