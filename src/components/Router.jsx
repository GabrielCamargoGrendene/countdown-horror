import {Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Adress } from "../pages/adress/Adress";

export function Router() {
  return (
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={Adress} path="/adress" />
      </Routes>
  );
}
