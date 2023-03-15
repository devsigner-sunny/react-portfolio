import React from "react";
import AppRoutes from "./Routes";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./App.scss";

export default function App() {
  return (
    <ParallaxProvider>
      <Header />
      <div className="px-32 py-20">
        <AppRoutes />
      </div>
      <Footer />
    </ParallaxProvider>
  );
}
