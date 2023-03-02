import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout } from "./layouts";
import { Home, Login, ProtectedRoute } from "./pages";
import { Test } from "./pages/Test";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
};
