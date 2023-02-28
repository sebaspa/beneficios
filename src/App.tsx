import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts";
import { Home, Login } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
