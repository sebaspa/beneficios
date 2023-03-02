import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
