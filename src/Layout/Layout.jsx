import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
