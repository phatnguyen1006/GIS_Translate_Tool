import { Button, notification } from "antd";
import { useRouter } from "next/router";
import Documentation from "@components/Documentation";
import { NextPage } from "next/types";
import styles from "../styles/Home.module.css";
import AppRoute from "@routes";
import Head from "next/head";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Home: NextPage = () => {
  const router = useRouter();

  const switchRoute = (pathName: string) => {
    router.push(pathName);
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    notification[type]({
      message: 'Tính năng hiện tại chưa khả dụng',
      description: "Sẽ được cập nhật ở phiên bản tiếp theo",
    });
  };

  return (
    <div className={styles.landingPageContainer}>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Documentation />
      <div className={styles.groupButtonContainer}>
        <Button type="primary" onClick={() => switchRoute(AppRoute.circle)}>Draw circle</Button>
        <Button type="primary" onClick={() => switchRoute(AppRoute.shiftPoint)}>Shift point</Button>
        <Button type="primary" onClick={() => switchRoute(AppRoute.shiftBlock)}>Shift block</Button>
        <Button type="primary" onClick={() => openNotificationWithIcon('warning')}>Rotate block</Button>
      </div>
    </div>
  );
};

export default Home;
