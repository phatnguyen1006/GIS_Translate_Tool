import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Input, Select, Button, Form } from 'antd';

import { HighlightOutlined } from '@ant-design/icons';
import { drawCircle, circleProps } from '../function/drawCircle'

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

  const [formValue, setFormValue] = useState<circleProps>({
    direction: 0,
    xStart: 0,
    xEnd: 0,
    yStart: 0,
    yEnd: 0,
  });
  const [form] = Form.useForm();



  const onFinish = (values: circleProps) => {
    console.log(values)
    setFormValue(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (


    <div className={styles.container}>

      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{backgroundColor: 'white'}}>
        <Form.Item name="direction" label="Direction" rules={[{ required: true }]}>
          <Select placeholder="Choose shift direction" style={{ width: 300 }}>
            <Option value="0">Horizontal</Option>
            <Option value="1">Vertical</Option>

          </Select>
        </Form.Item>
        <Form.Item name="xStart" label="X Start" rules={[{ required: true }]}>
          <Input placeholder='x start' />
        </Form.Item>
        <Form.Item name="yStart" label="Y Start" rules={[{ required: true }]}>
          <Input placeholder='y start' />
        </Form.Item >
        <Form.Item name="xEnd" label="X End" rules={[{ required: true }]}>
          <Input placeholder='x end' />
        </Form.Item>
        <Form.Item name="yEnd" label="Y End" rules={[{ required: true }]}>
          <Input placeholder='y end' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" icon={<HighlightOutlined />} size={'large'} htmlType='submit'>
            Draw
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <TextArea rows={10} placeholder="Result will be shown here, phờ rét cần trôn A tu cóp pi" value={drawCircle(formValue)} />
    </div>
  )
}

export default Circle
