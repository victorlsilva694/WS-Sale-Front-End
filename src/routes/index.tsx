import { useEffect, useContext } from "react";
import { authContext } from "../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import AddNewProduct from "../pages/AddNewProduct";

function PrivateRoute(props: any) {
  const store = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.isAuthenticated) {
      store.verifyToken().catch(() => {
        navigate("/login");
      });
    }
  }, [navigate, store, store.isAuthenticated]);
  return props.children;
}

function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route
        element={
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        }
        path="/User/DashBoard"
      />
      <Route
        element={
          <PrivateRoute>
            <AddNewProduct></AddNewProduct>
          </PrivateRoute>
        }
        path="/addNewProduct"
      />
    </Routes>
  );
}

export default Router;
