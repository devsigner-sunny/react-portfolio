import React from "react";
import Main from "./Layout/Main";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import "./App.scss";
import NavProvider from "../Context/NavContext";

export default function App() {
  return (
    <NavProvider>
      <Header />
      <Main />
      <Footer />
    </NavProvider>
  );
}
