import React from "react";
import styles from "./styles.module.css";

export default function DrawCircleDocumentation() {
  return (
    <div className={styles.documentContainer}>
      <p>
        Vì viết tiếng Anh sợ người đọc không hiểu nên xin phép được viết tài liệu bằng tiếng việt 😊
      </p>
      <h3>
        Vẽ nửa đường tròn
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được tập hợp toạ độ các điểm của một nửa đường tròn vẽ nằm trên trục Oz. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục toạ độ mà đường tròn nằm trên đó cùng với trục Oz</li>
        <li>Longitude start là kinh độ của điểm bắt đầu nửa đường tròn</li>
        <li>Latitude start là vĩ độ của điểm bắt đầu nửa đường tròn</li>
        <li>Longitude end là kinh độ của điểm kết thúc nửa đường tròn</li>
        <li>Latitude end là vĩ độ của điểm kết thúc nửa đường tròn</li>
        <li>X là toạ độ z của 2 điểm bắt đầu và kết thúc</li>
      </ul>
      <p>
        Nhấn nút Draw, công cụ sẽ trả về toạ độ của danh sách điểm thuộc khối sau khi đã tịnh tiến.
      </p>
    </div>
  );
}