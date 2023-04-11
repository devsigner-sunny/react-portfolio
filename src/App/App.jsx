import React from "react";
import Main from "./Layout/Main";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer/Footer";
import "./App.scss";
import NavProvider from "../Context/NavContext";
import MousePointer from "../Components/MousePointer";
import ScrollingProgress from "../Components/ScrollingProgress/ScrollingProgress";

export default function App() {
  return (
    <>
      <MousePointer />
      <ScrollingProgress />
      <NavProvider>
        <Header />
        <Main />
        <Footer />
      </NavProvider>
    </>
  );
}
