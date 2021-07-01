import React from "react";
import "./App.css";
import { Auth } from "../Auth";
import { Route, Routes } from "react-router";
import { Login, Register } from "../Auth/components/";
import { Error, PrivateRoute } from "./components";
import { Dashboard } from "../Dashboard";
import { Product } from "../Products";
import { Orders } from "../Orders";
import { useDataContext } from "../../contexts/useDataContext";
import { AddProduct } from "../Products/components";

function App() {
  const { toggleMenu } = useDataContext();
  return (
    <div className={`App ${toggleMenu && "reset-width"}`}>
      <Routes>
        <Route path="" element={<Auth />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/products" element={<Product />} />
        <PrivateRoute path="/products/add" element={<AddProduct />} />
        <PrivateRoute path="/orders" element={<Orders />} />
      </Routes>
      <Auth />
    </div>
  );
}

export default App;
