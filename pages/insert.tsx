import React, { useState } from 'react';
import styles from '../styles/Insert.module.css';
import { Button, Input, Modal, notification } from 'antd';
import axios from 'axios';
import withAuth from 'libs/privateRoute';
import { SERVER_URL } from '@constants';

const { TextArea } = Input;

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface ICheckingData {
    json: {
        id: string;
        nodes: Array<any>;
        block_name: string;
        block_height: number;
        color: string;
    }
    log?: {
        _id: string;
        username: string;
        payload: string;
        description: string;
        is_error: boolean;
    }
}

function Insert() {

    const [json, setJSON] = useState<string>("");
    const [rerender, setRerender] = useState<string>("");
    const [checkingData, setCheckingData] = useState<ICheckingData>({ json: { id: "", nodes: [], block_name: "", block_height: 0, color: "" } });
    const [responsePayload, setResponsePayload] = useState<string>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        submitBlockToServer();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const openNotificationWithIcon = (type: NotificationType) => {
        notification[type]({
            message: 'Đã gửi data đi',
            description: "Kết quả sẽ được trả về tại phần Data của bạn",
        });
    };

    async function submitBlockToServer() {
        let jsonStr = JSON.parse(json);
        let rerenderObj = JSON.parse(rerender);

        await axios.post(`${SERVER_URL}/building/insert`, { username: localStorage.getItem("username") ?? "", geoJson: jsonStr, rerender: rerenderObj }).then((res) => {
            // console.log(res);
            setCheckingData(res.data);
            // setResponsePayload(JSON.stringify(res.data));
            openNotificationWithIcon("success");
        });
    }

    async function confirmData(isError: boolean) {
        await axios.post(`${SERVER_URL}/building/insert/confirm`, { id: checkingData.log?._id, confirm: isError }).then((res) => {
            // console.log(res);
            openNotificationWithIcon("success");
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerCheckingContainer}>
                <div className={styles.checkingTagContainer}>
                    <div style={{ width: "100%" }}>
                        <h2>Data của bạn</h2>
                        {/* <TextArea style={{ width: "90%" }} rows={10} placeholder="Schema" readOnly value={Object.assign({}, JSON.parse(responsePayload))} /> */}
                        {checkingData.json.nodes.map((f, i) => <p key={i}>{f.map(unit => `${unit} - `)}</p>)}
                        <p>block_name: {checkingData.json.block_name}</p>
                        <p>block_height: {checkingData.json.block_height}</p>
                        <p>color: {checkingData.json.color}</p>
                    </div>
                    <div className={styles.groupButtonVertical}>
                        <Button type="primary" disabled={checkingData.json.id == ""} onClick={() => confirmData(false)} style={{ marginRight: 20 }}>Correct</Button>
                        <Button type="primary" disabled={checkingData.json.id == ""} danger onClick={() => confirmData(true)}>Incorrect</Button>
                    </div>
                </div>
                <Button type="primary" onClick={showModal}>Submit to DB</Button>
            </div>
            <div className={styles.headerCheckingContainer}>
                <TextArea style={{ width: "48%" }} rows={40} placeholder="Nhap GeoJSON" onChange={(e) => setJSON(e.target.value)} />
                <TextArea style={{ width: "48%" }} rows={40} placeholder="Nhap JSON rerender" onChange={(e) => setRerender(e.target.value)} />
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Chắc chắn muốn nhập vào database?</p>
            </Modal>
        </div>
    );
}

export default withAuth(Insert);
