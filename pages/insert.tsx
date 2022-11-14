import React, { useState } from 'react';
import styles from '../styles/Insert.module.css';
import { Button, Input } from 'antd';
import axios from 'axios';
import withAuth from 'libs/privateRoute';

const { TextArea } = Input;

function Insert() {

    const [json, setJSON] = useState<string>("");
    const [rerender, setRerender] = useState<string>("");
    const [checkingData, setCheckingData] = useState();

    function submitBlockToServer() {
        let jsonStr = JSON.parse(json);
        let rerenderObj = JSON.parse(rerender);
        console.log(rerenderObj);
        
        
        axios.post("http://localhost:8000/building", { json: jsonStr, rerender: rerenderObj }).then((res) => {
            console.log(res);
            setCheckingData(res.data.msg);
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerCheckingContainer}>
                <div className={styles.checkingTagContainer}>
                    <p>Data của bạn</p>
                    <p>{checkingData}</p>
                    <Button type="primary" onClick={submitBlockToServer} style={{ marginRight: 20 }}>Correct</Button>
                    <Button type="primary" onClick={submitBlockToServer}>Incorrect</Button>
                </div>
                <Button type="primary" onClick={submitBlockToServer}>Primary</Button>
            </div>
            <div className={styles.headerCheckingContainer}>
                <TextArea style={{ width: "45%" }} rows={40} placeholder="Nhap JSON" onChange={(e) => setJSON(e.target.value)} />
                <TextArea style={{ width: "45%" }} rows={40} placeholder="Nhap JSON rerender" onChange={(e) => setRerender(e.target.value)} />
            </div>
        </div>
    );
}

export default withAuth(Insert);
