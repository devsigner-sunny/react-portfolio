import React, {useEffect, useState} from "react";
import Main from "./Layout/Main";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer/Footer";
import "./App.scss";
import NavProvider from "../Context/NavContext";
import MousePointer from "../Components/MousePointer";
import {Loading} from "../Components/Loading";
import ScrollingProgress from "../Components/ScrollingProgress/ScrollingProgress";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
    };
    loadData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading}/>
      ) : (
        <>
          <MousePointer/>
          <ScrollingProgress/>
          <NavProvider>
            <Header/>
            <Main/>
            <Footer/>
          </NavProvider>
        </>
      )}
    </>
  );
}
