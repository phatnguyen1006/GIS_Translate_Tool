import { Button } from "antd";
import { useRouter } from "next/router";
import Documentation from "@components/Documentation";
import { NextPage } from "next/types";

const Home: NextPage = () => {
  const router = useRouter();

  const switchRoute = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <div>
      <Documentation />
      <div>
        <Button onClick={() => switchRoute("/circle")}>Draw circle</Button>
        <Button onClick={() => switchRoute("/shift-point")}>Shift point</Button>
        <Button onClick={() => switchRoute("/shift-block")}>Shift block</Button>
      </div>
    </div>
  );
};

export default Home;
