import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Input, Select, Button, Form } from 'antd';

import { CaretUpOutlined } from '@ant-design/icons';
import { shiftPoint, ShiftPointCrops } from '../function/shiftPoint'

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
    distance: 0
  });

  const [form] = Form.useForm();

  const onFinish = (values: ShiftPointCrops) => {
    console.log(values)
    setFormValue(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles.container}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ backgroundColor: 'white' }}>
        <Form.Item name="axis" label="Axis" rules={[{ required: true }]}>
          <Select placeholder="Choose shift axis" style={{ width: 300 }}>
            <Option value="0">Ox</Option>
            <Option value="1">Oy</Option>
          </Select>
        </Form.Item>
        <Form.Item name="direction" label="Direction" rules={[{ required: true }]}>
          <Select placeholder="Choose shift direction" style={{ width: 300 }}>
            <Option value="1">Positive</Option>
            <Option value="-1">Negative</Option>
          </Select>
        </Form.Item>
        <Form.Item name="lon" label="Longitude" rules={[{ required: true }]}>
          <Input placeholder='Longitude' />
        </Form.Item>
        <Form.Item name="lat" label="Latitude" rules={[{ required: true }]}>
          <Input placeholder='Latitude' />
        </Form.Item >
        <Form.Item name="z" label="Z offset" rules={[{ required: true }]}>
          <Input placeholder='Z offset' />
        </Form.Item >
        <Form.Item name="distance" label="Distance" rules={[{ required: true }]}>
          <Input placeholder='Distance' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" icon={<CaretUpOutlined />} size={'large'} htmlType='submit'>
            Shift
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <TextArea rows={10} placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi" value={shiftPoint(formValue)} />
    </div>
  )
}

export default ShiftPoint
