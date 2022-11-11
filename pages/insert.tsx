import React, { useState } from 'react';
import styles from '../styles/Insert.module.css';
import { Button, Input } from 'antd';
import axios from 'axios';
import withAuth from 'libs/privateRoute';

const { TextArea } = Input;

function Insert() {

    const [json, setJSON] = useState<string>("");

    function submitBlockToServer() {
        let jsonStr = JSON.parse(json);
        axios.post("http://localhost:8000/building", { json: jsonStr });
    }

    return (
        <div className={styles.container}>
            <TextArea style={{ width: "80%" }} rows={40} placeholder="Nhap JSON" onChange={(e) => setJSON(e.target.value)} />
            <Button type="primary" onClick={submitBlockToServer}>Primary</Button>
        </div>
    )
}

export default withAuth(Insert);