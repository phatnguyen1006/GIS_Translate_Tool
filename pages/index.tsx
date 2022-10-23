import { Button } from "antd";
import { useRouter } from "next/router";
import Documentation from "@components/Documentation";
import { NextPage } from "next/types";
import styles from "../styles/Home.module.css";
import AppRoute from "@routes";

const Home: NextPage = () => {
  const router = useRouter();

  const switchRoute = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <div className={styles.landingPageContainer}>
      <Documentation />
      <div className={styles.groupButtonContainer}>
        <Button type="primary" onClick={() => switchRoute(AppRoute.circle)}>Draw circle</Button>
        <Button type="primary" onClick={() => switchRoute(AppRoute.shiftPoint)}>Shift point</Button>
        <Button type="primary" onClick={() => switchRoute(AppRoute.shiftBlock)}>Shift block</Button>
      </div>
    </div>
  );
};

export default Home;
