import React from "react";
import Main from "./Layout/Main";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer/Footer";
import "./App.scss";
import NavProvider from "../Context/NavContext";
import MousePointer from "../Components/MousePointer";

export default function App() {
  return (
    <>
      <MousePointer />
      <NavProvider>
        <Header />
        <Main />
        <Footer />
      </NavProvider>
    </>
  );
}
