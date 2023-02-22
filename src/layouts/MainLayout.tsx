import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
