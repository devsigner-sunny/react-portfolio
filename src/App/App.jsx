import React from "react";
import AppRoutes from "./Routes";
import Header from "../Components/Header/Header";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <div className="px-32 py-20">
        <AppRoutes />
      </div>
    </>
  );
}
