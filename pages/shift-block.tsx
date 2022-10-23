import { useState } from "react";
import type { NextPage } from "next";
import { Input, Select, Button, Form } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

import { shiftBlock } from "@function";
import { ShiftPointCrops } from "@types";
import { splitFunction, ILocationInput } from "@helpers";

import styles from "../styles/Home.module.css";
import ShiftBlockDocumentation from "@components/Documentation/shiftBlock.docs";
import Head from "next/head";

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
    <div className={styles.shiftPage}>
      <Head>
        <title>Shifting Block</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ShiftBlockDocumentation />
      <div className={styles.formArea} style={{ backgroundColor: "white" }}>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className={styles.formContainer}
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
          {/* <Form.Item name="long" label="Longitude" rules={[{ required: true }]}>
          <Input placeholder='Longitude' />
        </Form.Item>
        <Form.Item name="lat" label="Latitude" rules={[{ required: true }]}>
          <Input placeholder='Latitude' />
        </Form.Item >
        <Form.Item name="z" label="Z offset" rules={[{ required: true }]}>
          <Input placeholder="Z offset" />
        </Form.Item> */}
          <Form.Item
            name={"location"}
            label="Point array"
            rules={[{ required: true, type: "string" }]}
          >
            <Input.TextArea placeholder="[longtude, latitude, z]" />
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
          rows={15}
          placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi"
          value={shiftedLocation}
        />
      </div>
    </div>
  );
};

export default ShiftBlock;
