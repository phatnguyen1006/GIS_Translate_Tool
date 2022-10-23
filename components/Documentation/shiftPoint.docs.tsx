import React from "react";
import styles from "./styles.module.css";

export default function ShiftPontDocumentation() {
  return (
    <div className={styles.documentContainer}>
      <p>
        Vì viết tiếng Anh sợ người đọc không hiểu nên xin phép được viết tài liệu bằng tiếng việt 😊
      </p>
      <h3>
        Tịnh tiến điểm (Shift point)
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được toạ độ của một điểm có khoảng cách nhất định từ một điểm gốc cho trước. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục tịnh tiến, gồm có trục Ox và Oy ứng với trục đã vẽ trên bản đồ</li>
        <li>Direction là hướng tịnh tiến, chọn giá trị positive (dương) sẽ tịnh tiến điểm theo chiều dương của trục toạ độ đã chọn. Ngược lại với giá trị negative (âm)</li>
        <li>Longitude là giá trị kinh độ của điểm gốc (giá trị đầu của điểm gốc)</li>
        <li>Latitude là giá trị vĩ độ của điểm gốc (giá trị thứ hai của điểm gốc)</li>
        <li>Z offset là giá trị z của điểm gốc (giá trị thứ ba của điểm gốc)</li>
        <li>Distance là khoảng cách tịnh tiến tính bằng đơn vị mét so với điểm gốc (vui lòng nhập số nguyên dương)</li>
      </ul>
      <p>
        Nhấn nút Shift, công cụ sẽ trả về toạ độ của điểm đã tịnh tiến.
      </p>
    </div>
  );
}