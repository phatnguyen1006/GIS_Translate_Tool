import React from "react";
import styles from "./styles.module.css";

export default function ShiftBlockDocumentation() {
  return (
    <div className={styles.documentContainer}>
      <p>
        Vì viết tiếng Anh sợ người đọc không hiểu nên xin phép được viết tài liệu bằng tiếng việt 😊
      </p>
      <h3>
        Tịnh tiến khối (Shift block)
      </h3>
      <p>
        Công cụ này giúp người dùng lấy được tập hợp toạ độ các điểm của một khối có khoảng cách nhất định từ một khối cho trước. Nhập các thông tin vào form bao gồm:
      </p>
      <ul>
        <li>Axis là trục tịnh tiến, gồm có trục Ox và Oy ứng với trục đã vẽ trên bản đồ</li>
        <li>Direction là hướng tịnh tiến, chọn giá trị positive (dương) sẽ tịnh tiến điểm theo chiều dương của trục toạ độ đã chọn. Ngược lại với giá trị negative (âm)</li>
        <li>Point array là danh sách các điểm của khối cần tịnh tiến (nhập đúng định dạng mảng của javascript)</li>
        <li>Distance là khoảng cách tịnh tiến tính bằng đơn vị mét so với điểm gốc (vui lòng nhập số nguyên dương)</li>
      </ul>
      <p>
        Nhấn nút Shift, công cụ sẽ trả về toạ độ của danh sách điểm thuộc khối sau khi đã tịnh tiến.
      </p>
    </div>
  );
}