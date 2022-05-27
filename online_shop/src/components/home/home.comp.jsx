//TODO: Replace given pictures by own pictures (pc hardware online shop)

import { Outlet } from "react-router-dom";
import Directory from "../directory/directory.comp";
import "../../components/directory/directory.styles.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "workstations",
      imageUrl: "https://i.ibb.co/1qzvfh1/notebook-test.png",
    },
    {
      id: 2,
      title: "server",
      imageUrl: "https://i.ibb.co/641yCff/workstation.png",
    },
    {
      id: 3,
      title: "notebooks",
      imageUrl: "https://i.ibb.co/SPbwmjH/notebook.jpg",
    },
    {
      id: 4,
      title: "graphic cards",
      imageUrl: "https://i.ibb.co/7k04F5p/komponenten.png",
    },
    {
      id: 5,
      title: "NAS and DAS",
      imageUrl: "https://i.ibb.co/wsywgYb/nas-das.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />;
      <Outlet />
    </div>
  );
};

export default Home;
