import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
