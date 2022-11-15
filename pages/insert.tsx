import React, { useState } from 'react';
import styles from '../styles/Insert.module.css';
import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import withAuth from 'libs/privateRoute';

const { TextArea } = Input;

interface ICheckingData {
    json: {
        id: string;
        face: Array<any>;
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
    const [checkingData, setCheckingData] = useState<ICheckingData>({ json: { id: "", face: [] } });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        submitBlockToServer();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    async function submitBlockToServer() {
        let jsonStr = JSON.parse(json);
        let rerenderObj = JSON.parse(rerender);

        await axios.post("http://localhost:8000/building/insert", { username: localStorage.getItem("username") ?? "", geoJson: jsonStr, rerender: rerenderObj }).then((res) => {
            console.log(res);
            setCheckingData(res.data);
        });
    }

    async function confirmData(isError: boolean) {
        await axios.post("http://localhost:8000/building/insert/confirm", { id: checkingData.log?._id, confirm: isError }).then((res) => {
            console.log(res);
        });
    }


    return (
        <div className={styles.container}>
            <div className={styles.headerCheckingContainer}>
                <div className={styles.checkingTagContainer}>
                    <p>Data của bạn</p>
                    {checkingData.json.face.map((f, i) => {
                        console.log(f);
                        return <div key={i}>{f}</div>;
                    })}
                    <Button type="primary" disabled={checkingData.json.id == ""} onClick={() => confirmData(false)} style={{ marginRight: 20 }}>Correct</Button>
                    <Button type="primary" disabled={checkingData.json.id == ""} onClick={() => confirmData(true)}>Incorrect</Button>
                </div>
                <Button type="primary" onClick={showModal}>Primary</Button>
            </div>
            <div className={styles.headerCheckingContainer}>
                <TextArea style={{ width: "45%" }} rows={40} placeholder="Nhap JSON" onChange={(e) => setJSON(e.target.value)} />
                <TextArea style={{ width: "45%" }} rows={40} placeholder="Nhap JSON rerender" onChange={(e) => setRerender(e.target.value)} />
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Chắc chắn muốn nhập vào database?</p>
            </Modal>
        </div>
    );
}

export default withAuth(Insert);
