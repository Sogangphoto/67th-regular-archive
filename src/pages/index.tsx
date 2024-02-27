import "./index.css";
import App from "./home";
import About from "./about";
import Archive from "./archive";
import Photographers from "./photographers";
import Thanks from "./thanks";
import Contact from "./contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import React from "react";

const Index = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-fit  bg-[#F1EFEB]">
        <div className="mx-auto flex min-h-screen max-w-[390px] flex-col xl:max-w-7xl">
          <Navigation />
          <div className="flex flex-1 flex-grow flex-col">
            <Routes>
              <Route index element={<App />} />
              <Route path="about/" element={<About />} />
              <Route path="archive/" element={<Archive />} />
              <Route path="photographers/" element={<Photographers />} />
              <Route path="thanks/" element={<Thanks />} />,
              <Route path="contact/" element={<Contact />} />,
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Index;
